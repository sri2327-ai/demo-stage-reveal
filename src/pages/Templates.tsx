import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Template } from '../types';
import { generateTemplateMetrics } from '../utils/templateMetrics';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../components/ui/use-toast';
import { ShareTemplate } from '../components/ShareTemplate';

const templatesData: Template[] = [
  {
    id: 1,
    title: 'SOAP Note for General Checkup',
    description: 'A structured template for documenting patient encounters, including Subjective, Objective, Assessment, and Plan sections.',
    category: 'General Medicine',
  },
  {
    id: 2,
    title: 'Pediatric Examination Template',
    description: 'A comprehensive template for pediatric examinations, covering growth, development, and vaccinations.',
    category: 'Pediatrics',
  },
  {
    id: 3,
    title: 'Cardiology Consultation Note',
    description: 'A detailed template for cardiology consultations, including cardiac history, examination findings, and treatment plan.',
    category: 'Cardiology',
  },
  {
    id: 4,
    title: 'Dermatology Visit Template',
    description: 'A focused template for dermatology visits, with sections for lesion description, diagnosis, and treatment options.',
    category: 'Dermatology',
  },
  {
    id: 5,
    title: 'Orthopedic Evaluation Form',
    description: 'A structured form for orthopedic evaluations, covering musculoskeletal examination, imaging results, and management plan.',
    category: 'Orthopedics',
  },
  {
    id: 6,
    title: 'Mental Health Assessment Template',
    description: 'A comprehensive template for mental health assessments, including psychiatric history, mental status examination, and treatment recommendations.',
    category: 'Psychiatry',
  },
  {
    id: 7,
    title: 'Obstetrics Initial Visit Form',
    description: 'A detailed form for initial obstetrics visits, covering pregnancy history, risk factors, and prenatal care plan.',
    category: 'Obstetrics',
  },
  {
    id: 8,
    title: 'Ophthalmology Examination Template',
    description: 'A focused template for ophthalmology examinations, with sections for visual acuity, eye pressure, and fundus examination.',
    category: 'Ophthalmology',
  },
  {
    id: 9,
    title: 'Neurology Consultation Note',
    description: 'A comprehensive template for neurology consultations, including neurological examination, imaging results, and treatment strategies.',
    category: 'Neurology',
  },
  {
    id: 10,
    title: 'Emergency Room Triage Template',
    description: 'A structured template for emergency room triage, covering chief complaint, vital signs, and initial assessment.',
    category: 'Emergency Medicine',
  },
];

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Template title must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  category: z.string().min(2, {
    message: "Category must be at least 2 characters.",
  }),
})

const Templates: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>(templatesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
    },
  })

  const handleUseTemplate = (template: Template) => {
    // Implement your logic for using the template here
    console.log('Using template:', template);
  };

  const handlePreview = (template: Template) => {
    setPreviewTemplate(template);
  };

  const handleClosePreview = () => {
    setPreviewTemplate(null);
  };

  const categories = ['All', ...Array.from(new Set(templates.map(template => template.category)))];

  const filteredTemplates = templates.filter(template => {
    const searchRegex = new RegExp(searchTerm, 'i');
    const categoryMatch = selectedCategory === 'All' || template.category === selectedCategory;
    return searchRegex.test(template.title) && categoryMatch;
  });

  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    // Implement your form submission logic here.
    // For example, send data to your API.
    const newTemplate: Template = {
      id: templates.length + 1,
      title: values.title,
      description: values.description,
      category: values.category,
    };

    setTemplates([...templates, newTemplate]);
    form.reset();
    toast({
      title: "Success!",
      description: "Your template has been created.",
    })
    console.log(values)
  }, [form, templates, toast]);

  return (
    <div className="container mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
          <Input 
            type="text" 
            placeholder="Search templates..." 
            className="w-full sm:w-64 md:w-80"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Template</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Template</DialogTitle>
              <DialogDescription>
                Create a new template to use in your practice.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Template Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Template Description."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input placeholder="Template Category" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredTemplates.map((template) => {
                  const metrics = generateTemplateMetrics(template.id);
                  return (
                    <div 
                      key={template.id} 
                      className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-all duration-200 hover:border-[#387E89]/30"
                    >
                      <div className="flex justify-between items-start mb-3 sm:mb-4">
                        <span className="inline-block px-2 sm:px-3 py-1 bg-[#387E89]/10 text-[#143151] text-xs sm:text-sm rounded-full font-medium">
                          {template.category}
                        </span>
                        <ShareTemplate 
                          templateTitle={template.title}
                          templateId={template.id}
                          size="sm"
                          variant="ghost"
                        />
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-semibold text-[#143151] mb-2 sm:mb-3 line-clamp-2">
                        {template.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                        {template.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="font-medium">{metrics.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>👥</span>
                          <span>{metrics.uses.toLocaleString()} uses</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>⏱️</span>
                          <span>{metrics.estimatedTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#112a46] hover:to-[#306b75] text-white text-sm sm:text-base"
                          onClick={() => handleUseTemplate(template)}
                        >
                          Use Template
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1 border-[#387E89]/30 text-[#143151] hover:bg-[#387E89]/10 text-sm sm:text-base"
                          onClick={() => handlePreview(template)}
                        >
                          Preview
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>

      {previewTemplate && (
        <Dialog open={!!previewTemplate} onOpenChange={handleClosePreview}>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>{previewTemplate.title} Preview</DialogTitle>
              <DialogDescription>
                Here is a preview of the template.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <h4 className="text-lg font-semibold mb-2">Description:</h4>
              <p className="text-gray-700">{previewTemplate.description}</p>
              <h4 className="text-lg font-semibold mt-4 mb-2">Category:</h4>
              <p className="text-gray-700">{previewTemplate.category}</p>
              {/* Add more preview content here if needed */}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Templates;
