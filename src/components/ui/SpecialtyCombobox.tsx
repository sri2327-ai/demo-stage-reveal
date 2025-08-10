import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

export type ComboboxItem = {
  value: string;
  label: string;
};

interface SpecialtyComboboxProps {
  items: ComboboxItem[];
  value: string | null;
  onChange: (value: string | null) => void;
  placeholder?: string;
}

export function SpecialtyCombobox({ items, value, onChange, placeholder = "Select a specialty" }: SpecialtyComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const selected = items.find((i) => i.value === value) ?? null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[min(90vw,20rem)] justify-between rounded-full"
        >
          <span className={cn("truncate", !selected && "text-muted-foreground")}>{selected ? selected.label : placeholder}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="center" className="z-50 w-[min(90vw,24rem)] p-0 bg-popover border shadow-lg rounded-md">
        <Command className="bg-popover">
          <CommandInput placeholder="Search specialties..." />
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandList className="max-h-72 overflow-auto">
            <CommandGroup heading="Specialties">
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.label}
                  onSelect={() => {
                    onChange(item.value);
                    setOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  <Check className={cn("mr-2 h-4 w-4", value === item.value ? "opacity-100" : "opacity-0")} />
                  <span className="truncate">{item.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default SpecialtyCombobox;
