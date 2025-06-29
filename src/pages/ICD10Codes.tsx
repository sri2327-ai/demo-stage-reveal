
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, ChevronRight, Filter, Info } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

const icd10Chapters = [
  {
    id: 'a00-b99',
    range: 'A00-B99',
    title: 'Certain infectious and parasitic diseases',
    chapter: 'Chapter 1',
    subcategories: [
      { range: 'A00-A09', title: 'Intestinal infectious diseases', codeCount: 94 },
      { range: 'A15-A19', title: 'Tuberculosis', codeCount: 28 },
      { range: 'A20-A28', title: 'Certain zoonotic bacterial diseases', codeCount: 45 },
      { range: 'A30-A49', title: 'Other bacterial diseases', codeCount: 67 },
      { range: 'A50-A64', title: 'Infections with a predominantly sexual mode of transmission', codeCount: 82 },
      { range: 'A65-A69', title: 'Other spirochetal diseases', codeCount: 23 },
      { range: 'A70-A74', title: 'Other diseases caused by chlamydiae', codeCount: 18 },
      { range: 'A75-A79', title: 'Rickettsioses', codeCount: 15 },
      { range: 'A80-A89', title: 'Viral and prion infections of the central nervous system', codeCount: 34 },
      { range: 'A90-A99', title: 'Arthropod-borne viral fevers and viral hemorrhagic fevers', codeCount: 41 },
      { range: 'B00-B09', title: 'Viral infections characterized by skin and mucous membrane lesions', codeCount: 52 },
      { range: 'B10', title: 'Other human herpesviruses', codeCount: 8 },
      { range: 'B15-B19', title: 'Viral hepatitis', codeCount: 29 },
      { range: 'B20', title: 'Human immunodeficiency virus [HIV] disease', codeCount: 12 },
      { range: 'B25-B34', title: 'Other viral diseases', codeCount: 38 },
      { range: 'B35-B49', title: 'Mycoses', codeCount: 65 },
      { range: 'B50-B64', title: 'Protozoal diseases', codeCount: 47 },
      { range: 'B65-B83', title: 'Helminthiases', codeCount: 73 },
      { range: 'B85-B89', title: 'Pediculosis, acariasis and other infestations', codeCount: 19 },
      { range: 'B90-B94', title: 'Sequelae of infectious and parasitic diseases', codeCount: 16 },
      { range: 'B95-B97', title: 'Bacterial and viral infectious agents', codeCount: 31 },
      { range: 'B99', title: 'Other infectious diseases', codeCount: 5 }
    ]
  },
  {
    id: 'c00-d49',
    range: 'C00-D49',
    title: 'Neoplasms',
    chapter: 'Chapter 2',
    subcategories: [
      { range: 'C00-C14', title: 'Malignant neoplasms of lip, oral cavity and pharynx', codeCount: 89 },
      { range: 'C15-C26', title: 'Malignant neoplasms of digestive organs', codeCount: 156 },
      { range: 'C30-C39', title: 'Malignant neoplasms of respiratory and intrathoracic organs', codeCount: 78 },
      { range: 'C40-C41', title: 'Malignant neoplasms of bone and articular cartilage', codeCount: 23 },
      { range: 'C43-C44', title: 'Melanoma and other malignant neoplasms of skin', codeCount: 67 },
      { range: 'C45-C49', title: 'Malignant neoplasms of mesothelial and soft tissue', codeCount: 34 },
      { range: 'C50', title: 'Malignant neoplasm of breast', codeCount: 45 },
      { range: 'C51-C58', title: 'Malignant neoplasms of female genital organs', codeCount: 89 },
      { range: 'C60-C63', title: 'Malignant neoplasms of male genital organs', codeCount: 34 },
      { range: 'C64-C68', title: 'Malignant neoplasms of urinary tract', codeCount: 56 },
      { range: 'C69-C72', title: 'Malignant neoplasms of eye, brain and other CNS', codeCount: 78 },
      { range: 'C73-C75', title: 'Malignant neoplasms of thyroid and other endocrine glands', codeCount: 23 },
      { range: 'C76-C80', title: 'Malignant neoplasms of ill-defined, other secondary sites', codeCount: 34 },
      { range: 'C81-C96', title: 'Malignant neoplasms of lymphoid, hematopoietic tissue', codeCount: 145 },
      { range: 'D00-D09', title: 'In situ neoplasms', codeCount: 67 },
      { range: 'D10-D36', title: 'Benign neoplasms', codeCount: 234 },
      { range: 'D37-D48', title: 'Neoplasms of uncertain behavior', codeCount: 89 },
      { range: 'D49', title: 'Neoplasms of unspecified behavior', codeCount: 12 }
    ]
  },
  {
    id: 'd50-d89',
    range: 'D50-D89',
    title: 'Diseases of the blood and blood-forming organs',
    chapter: 'Chapter 3',
    subcategories: [
      { range: 'D50-D53', title: 'Nutritional anemias', codeCount: 45 },
      { range: 'D55-D59', title: 'Hemolytic anemias', codeCount: 67 },
      { range: 'D60-D64', title: 'Aplastic and other anemias', codeCount: 89 },
      { range: 'D65-D69', title: 'Coagulation defects, purpura', codeCount: 78 },
      { range: 'D70-D77', title: 'Other disorders of blood and blood-forming organs', codeCount: 56 },
      { range: 'D78', title: 'Intraoperative and postprocedural complications', codeCount: 23 },
      { range: 'D80-D89', title: 'Certain disorders involving the immune mechanism', codeCount: 67 }
    ]
  },
  {
    id: 'e00-e89',
    range: 'E00-E89',
    title: 'Endocrine, nutritional and metabolic diseases',
    chapter: 'Chapter 4',
    subcategories: [
      { range: 'E00-E07', title: 'Disorders of thyroid gland', codeCount: 45 },
      { range: 'E08-E13', title: 'Diabetes mellitus', codeCount: 234 },
      { range: 'E15-E16', title: 'Other disorders of glucose regulation', codeCount: 23 },
      { range: 'E20-E35', title: 'Disorders of other endocrine glands', codeCount: 89 },
      { range: 'E36', title: 'Intraoperative complications of endocrine system', codeCount: 12 },
      { range: 'E40-E46', title: 'Malnutrition', codeCount: 34 },
      { range: 'E50-E64', title: 'Other nutritional deficiencies', codeCount: 67 },
      { range: 'E65-E68', title: 'Overweight, obesity and other hyperalimentation', codeCount: 23 },
      { range: 'E70-E88', title: 'Metabolic disorders', codeCount: 156 },
      { range: 'E89', title: 'Postprocedural endocrine and metabolic complications', codeCount: 18 }
    ]
  },
  {
    id: 'f01-f99',
    range: 'F01-F99',
    title: 'Mental, Behavioral and Neurodevelopmental disorders',
    chapter: 'Chapter 5',
    subcategories: [
      { range: 'F01-F09', title: 'Mental disorders due to known physiological conditions', codeCount: 67 },
      { range: 'F10-F19', title: 'Mental and behavioral disorders due to psychoactive substance use', codeCount: 234 },
      { range: 'F20-F29', title: 'Schizophrenia, schizotypal, delusional, and other psychotic disorders', codeCount: 89 },
      { range: 'F30-F39', title: 'Mood [affective] disorders', codeCount: 156 },
      { range: 'F40-F48', title: 'Anxiety, dissociative, stress-related disorders', codeCount: 123 },
      { range: 'F50-F59', title: 'Behavioral syndromes associated with physiological disturbances', codeCount: 78 },
      { range: 'F60-F69', title: 'Disorders of adult personality and behavior', codeCount: 56 },
      { range: 'F70-F79', title: 'Intellectual disabilities', codeCount: 34 },
      { range: 'F80-F89', title: 'Pervasive and specific developmental disorders', codeCount: 67 },
      { range: 'F90-F98', title: 'Behavioral and emotional disorders with onset in childhood', codeCount: 89 },
      { range: 'F99', title: 'Unspecified mental disorder', codeCount: 5 }
    ]
  },
  {
    id: 'g00-g99',
    range: 'G00-G99',
    title: 'Diseases of the nervous system',
    chapter: 'Chapter 6',
    subcategories: [
      { range: 'G00-G09', title: 'Inflammatory diseases of the central nervous system', codeCount: 67 },
      { range: 'G10-G14', title: 'Systemic atrophies primarily affecting the central nervous system', codeCount: 34 },
      { range: 'G20-G26', title: 'Extrapyramidal and movement disorders', codeCount: 78 },
      { range: 'G30-G32', title: 'Other degenerative diseases of the nervous system', codeCount: 45 },
      { range: 'G35-G37', title: 'Demyelinating diseases of the central nervous system', codeCount: 23 },
      { range: 'G40-G47', title: 'Episodic and paroxysmal disorders', codeCount: 123 },
      { range: 'G50-G59', title: 'Nerve, nerve root and plexus disorders', codeCount: 89 },
      { range: 'G60-G65', title: 'Polyneuropathies and other disorders of the peripheral nervous system', codeCount: 56 },
      { range: 'G70-G73', title: 'Diseases of myoneural junction and muscle', codeCount: 34 },
      { range: 'G80-G83', title: 'Cerebral palsy and other paralytic syndromes', codeCount: 45 },
      { range: 'G89-G99', title: 'Other disorders of the nervous system', codeCount: 67 }
    ]
  },
  {
    id: 'h00-h59',
    range: 'H00-H59',
    title: 'Diseases of the eye and adnexa',
    chapter: 'Chapter 7',
    subcategories: [
      { range: 'H00-H05', title: 'Disorders of eyelid, lacrimal system and orbit', codeCount: 89 },
      { range: 'H10-H11', title: 'Disorders of conjunctiva', codeCount: 45 },
      { range: 'H15-H22', title: 'Disorders of sclera, cornea, iris and ciliary body', codeCount: 123 },
      { range: 'H25-H28', title: 'Disorders of lens', codeCount: 34 },
      { range: 'H30-H36', title: 'Disorders of choroid and retina', codeCount: 156 },
      { range: 'H40-H42', title: 'Glaucoma', codeCount: 67 },
      { range: 'H43-H44', title: 'Disorders of vitreous body and globe', codeCount: 56 },
      { range: 'H46-H47', title: 'Disorders of optic nerve and visual pathways', codeCount: 23 },
      { range: 'H49-H52', title: 'Disorders of ocular muscles, binocular movement', codeCount: 78 },
      { range: 'H53-H54', title: 'Visual disturbances and blindness', codeCount: 45 },
      { range: 'H55-H57', title: 'Other disorders of eye and adnexa', codeCount: 34 },
      { range: 'H59', title: 'Intraoperative and postprocedural complications', codeCount: 18 }
    ]
  },
  {
    id: 'h60-h95',
    range: 'H60-H95',
    title: 'Diseases of the ear and mastoid process',
    chapter: 'Chapter 8',
    subcategories: [
      { range: 'H60-H62', title: 'Diseases of external ear', codeCount: 45 },
      { range: 'H65-H75', title: 'Diseases of middle ear and mastoid', codeCount: 89 },
      { range: 'H80-H83', title: 'Diseases of inner ear', codeCount: 56 },
      { range: 'H90-H94', title: 'Other disorders of ear', codeCount: 67 },
      { range: 'H95', title: 'Intraoperative and postprocedural complications', codeCount: 23 }
    ]
  },
  {
    id: 'i00-i99',
    range: 'I00-I99',
    title: 'Diseases of the circulatory system',
    chapter: 'Chapter 9',
    subcategories: [
      { range: 'I00-I02', title: 'Acute rheumatic fever', codeCount: 23 },
      { range: 'I05-I09', title: 'Chronic rheumatic heart diseases', codeCount: 45 },
      { range: 'I10-I16', title: 'Hypertensive diseases', codeCount: 78 },
      { range: 'I20-I25', title: 'Ischemic heart diseases', codeCount: 123 },
      { range: 'I26-I28', title: 'Pulmonary heart disease and diseases of pulmonary circulation', codeCount: 34 },
      { range: 'I30-I52', title: 'Other forms of heart disease', codeCount: 189 },
      { range: 'I60-I69', title: 'Cerebrovascular diseases', codeCount: 156 },
      { range: 'I70-I79', title: 'Diseases of arteries, arterioles and capillaries', codeCount: 89 },
      { range: 'I80-I89', title: 'Diseases of veins, lymphatic vessels and lymph nodes', codeCount: 67 },
      { range: 'I95-I99', title: 'Other and unspecified disorders of the circulatory system', codeCount: 45 }
    ]
  },
  {
    id: 'j00-j99',
    range: 'J00-J99',
    title: 'Diseases of the respiratory system',
    chapter: 'Chapter 10',
    subcategories: [
      { range: 'J00-J06', title: 'Acute upper respiratory infections', codeCount: 56 },
      { range: 'J09-J18', title: 'Influenza and pneumonia', codeCount: 89 },
      { range: 'J20-J22', title: 'Other acute lower respiratory infections', codeCount: 34 },
      { range: 'J30-J39', title: 'Other diseases of upper respiratory tract', codeCount: 78 },
      { range: 'J40-J47', title: 'Chronic lower respiratory diseases', codeCount: 123 },
      { range: 'J60-J70', title: 'Lung diseases due to external agents', codeCount: 67 },
      { range: 'J80-J84', title: 'Other respiratory diseases principally affecting the interstitium', codeCount: 45 },
      { range: 'J85-J86', title: 'Suppurative and necrotic conditions of the lower respiratory tract', codeCount: 23 },
      { range: 'J90-J94', title: 'Other diseases of the pleura', codeCount: 34 },
      { range: 'J95', title: 'Intraoperative and postprocedural complications', codeCount: 18 },
      { range: 'J96-J99', title: 'Other diseases of the respiratory system', codeCount: 28 }
    ]
  },
  {
    id: 'k00-k95',
    range: 'K00-K95',
    title: 'Diseases of the digestive system',
    chapter: 'Chapter 11',
    subcategories: [
      { range: 'K00-K14', title: 'Diseases of oral cavity and salivary glands', codeCount: 89 },
      { range: 'K20-K31', title: 'Diseases of esophagus, stomach and duodenum', codeCount: 123 },
      { range: 'K35-K37', title: 'Diseases of appendix', codeCount: 23 },
      { range: 'K40-K46', title: 'Hernia', codeCount: 67 },
      { range: 'K50-K52', title: 'Noninfective enteritis and colitis', codeCount: 78 },
      { range: 'K55-K64', title: 'Other diseases of intestines', codeCount: 156 },
      { range: 'K65-K68', title: 'Diseases of peritoneum and retroperitoneum', codeCount: 34 },
      { range: 'K70-K77', title: 'Diseases of liver', codeCount: 89 },
      { range: 'K80-K87', title: 'Disorders of gallbladder, biliary tract and pancreas', codeCount: 67 },
      { range: 'K90-K95', title: 'Other diseases of the digestive system', codeCount: 45 }
    ]
  },
  {
    id: 'l00-l99',
    range: 'L00-L99',
    title: 'Diseases of the skin and subcutaneous tissue',
    chapter: 'Chapter 12',
    subcategories: [
      { range: 'L00-L08', title: 'Infections of the skin and subcutaneous tissue', codeCount: 89 },
      { range: 'L10-L14', title: 'Bullous disorders', codeCount: 34 },
      { range: 'L20-L30', title: 'Dermatitis and eczema', codeCount: 123 },
      { range: 'L40-L45', title: 'Papulosquamous disorders', codeCount: 67 },
      { range: 'L49-L54', title: 'Urticaria and erythema', codeCount: 45 },
      { range: 'L55-L59', title: 'Radiation-related disorders of the skin', codeCount: 23 },
      { range: 'L60-L75', title: 'Disorders of skin appendages', codeCount: 89 },
      { range: 'L76', title: 'Intraoperative and postprocedural complications', codeCount: 12 },
      { range: 'L80-L99', title: 'Other disorders of the skin and subcutaneous tissue', codeCount: 78 }
    ]
  },
  {
    id: 'm00-m99',
    range: 'M00-M99',
    title: 'Diseases of the musculoskeletal system and connective tissue',
    chapter: 'Chapter 13',
    subcategories: [
      { range: 'M00-M02', title: 'Infectious arthropathies', codeCount: 67 },
      { range: 'M05-M14', title: 'Inflammatory polyarthropathies', codeCount: 123 },
      { range: 'M15-M19', title: 'Osteoarthritis', codeCount: 89 },
      { range: 'M20-M25', title: 'Other joint disorders', codeCount: 156 },
      { range: 'M26-M27', title: 'Dentofacial anomalies and jaw disorders', codeCount: 45 },
      { range: 'M30-M36', title: 'Systemic connective tissue disorders', codeCount: 78 },
      { range: 'M40-M43', title: 'Deforming dorsopathies', codeCount: 67 },
      { range: 'M45-M49', title: 'Spondylopathies', codeCount: 89 },
      { range: 'M50-M54', title: 'Other dorsopathies', codeCount: 123 },
      { range: 'M60-M63', title: 'Disorders of muscles', codeCount: 56 },
      { range: 'M65-M67', title: 'Disorders of synovium and tendon', codeCount: 78 },
      { range: 'M70-M79', title: 'Other soft tissue disorders', codeCount: 134 },
      { range: 'M80-M85', title: 'Disorders of bone density and structure', codeCount: 67 },
      { range: 'M86-M90', title: 'Other osteopathies', codeCount: 89 },
      { range: 'M91-M94', title: 'Chondropathies', codeCount: 45 },
      { range: 'M95', title: 'Other disorders of the musculoskeletal system', codeCount: 23 },
      { range: 'M96', title: 'Intraoperative and postprocedural complications', codeCount: 34 },
      { range: 'M97', title: 'Periprosthetic fracture around internal prosthetic joint', codeCount: 18 },
      { range: 'M99', title: 'Biomechanical lesions, not elsewhere classified', codeCount: 12 }
    ]
  },
  {
    id: 'n00-n99',
    range: 'N00-N99',
    title: 'Diseases of the genitourinary system',
    chapter: 'Chapter 14',
    subcategories: [
      { range: 'N00-N08', title: 'Glomerular diseases', codeCount: 89 },
      { range: 'N10-N16', title: 'Renal tubulo-interstitial diseases', codeCount: 67 },
      { range: 'N17-N19', title: 'Acute kidney failure and chronic kidney disease', codeCount: 45 },
      { range: 'N20-N23', title: 'Urolithiasis', codeCount: 34 },
      { range: 'N25-N29', title: 'Other disorders of kidney and ureter', codeCount: 56 },
      { range: 'N30-N39', title: 'Other diseases of the urinary system', codeCount: 123 },
      { range: 'N40-N53', title: 'Diseases of male genital organs', codeCount: 89 },
      { range: 'N60-N65', title: 'Disorders of breast', codeCount: 67 },
      { range: 'N70-N77', title: 'Inflammatory diseases of female pelvic organs', codeCount: 78 },
      { range: 'N80-N98', title: 'Noninflammatory disorders of female genital tract', codeCount: 156 },
      { range: 'N99', title: 'Intraoperative and postprocedural complications', codeCount: 23 }
    ]
  },
  {
    id: 'o00-o9a',
    range: 'O00-O9A',
    title: 'Pregnancy, childbirth and the puerperium',
    chapter: 'Chapter 15',
    subcategories: [
      { range: 'O00-O08', title: 'Pregnancy with abortive outcome', codeCount: 89 },
      { range: 'O09', title: 'Supervision of high risk pregnancy', codeCount: 23 },
      { range: 'O10-O16', title: 'Edema, proteinuria and hypertensive disorders in pregnancy', codeCount: 67 },
      { range: 'O20-O29', title: 'Other maternal disorders predominantly related to pregnancy', codeCount: 123 },
      { range: 'O30-O48', title: 'Maternal care related to the fetus and amniotic cavity', codeCount: 156 },
      { range: 'O60-O77', title: 'Complications of labor and delivery', codeCount: 189 },
      { range: 'O80-O82', title: 'Encounter for delivery', codeCount: 34 },
      { range: 'O85-O92', title: 'Complications predominantly related to the puerperium', codeCount: 78 },
      { range: 'O94-O9A', title: 'Other obstetric conditions', codeCount: 45 }
    ]
  },
  {
    id: 'p00-p96',
    range: 'P00-P96',
    title: 'Certain conditions originating in the perinatal period',
    chapter: 'Chapter 16',
    subcategories: [
      { range: 'P00-P04', title: 'Newborn affected by maternal factors', codeCount: 89 },
      { range: 'P05-P08', title: 'Disorders of newborn related to length of gestation', codeCount: 45 },
      { range: 'P09', title: 'Abnormal findings on neonatal screening', codeCount: 12 },
      { range: 'P10-P15', title: 'Birth trauma', codeCount: 67 },
      { range: 'P19-P29', title: 'Respiratory and cardiovascular disorders specific to the perinatal period', codeCount: 123 },
      { range: 'P35-P39', title: 'Infections specific to the perinatal period', codeCount: 78 },
      { range: 'P50-P61', title: 'Hemorrhagic and hematological disorders of newborn', codeCount: 89 },
      { range: 'P70-P74', title: 'Transitory endocrine and metabolic disorders specific to newborn', codeCount: 56 },
      { range: 'P76-P78', title: 'Digestive system disorders of newborn', codeCount: 34 },
      { range: 'P80-P83', title: 'Conditions involving the integument and temperature regulation', codeCount: 45 },
      { range: 'P84', title: 'Other problems with newborn', codeCount: 8 },
      { range: 'P90-P96', title: 'Other disorders originating in the perinatal period', codeCount: 67 }
    ]
  },
  {
    id: 'q00-q99',
    range: 'Q00-Q99',
    title: 'Congenital malformations, deformations and chromosomal abnormalities',
    chapter: 'Chapter 17',
    subcategories: [
      { range: 'Q00-Q07', title: 'Congenital malformations of the nervous system', codeCount: 89 },
      { range: 'Q10-Q18', title: 'Congenital malformations of eye, ear, face and neck', codeCount: 123 },
      { range: 'Q20-Q28', title: 'Congenital malformations of the circulatory system', codeCount: 156 },
      { range: 'Q30-Q34', title: 'Congenital malformations of the respiratory system', codeCount: 67 },
      { range: 'Q35-Q37', title: 'Cleft lip and cleft palate', codeCount: 23 },
      { range: 'Q38-Q45', title: 'Other congenital malformations of the digestive system', codeCount: 89 },
      { range: 'Q50-Q56', title: 'Congenital malformations of genital organs', codeCount: 78 },
      { range: 'Q60-Q64', title: 'Congenital malformations of the urinary system', codeCount: 56 },
      { range: 'Q65-Q79', title: 'Congenital malformations of the musculoskeletal system', codeCount: 134 },
      { range: 'Q80-Q89', title: 'Other congenital malformations', codeCount: 89 },
      { range: 'Q90-Q99', title: 'Chromosomal abnormalities', codeCount: 67 }
    ]
  },
  {
    id: 'r00-r99',
    range: 'R00-R99',
    title: 'Symptoms, signs and abnormal clinical and laboratory findings',
    chapter: 'Chapter 18',
    subcategories: [
      { range: 'R00-R09', title: 'Symptoms and signs involving the circulatory and respiratory systems', codeCount: 89 },
      { range: 'R10-R19', title: 'Symptoms and signs involving the digestive system and abdomen', codeCount: 67 },
      { range: 'R20-R23', title: 'Symptoms and signs involving the skin and subcutaneous tissue', codeCount: 34 },
      { range: 'R25-R29', title: 'Symptoms and signs involving the nervous and musculoskeletal systems', codeCount: 78 },
      { range: 'R30-R39', title: 'Symptoms and signs involving the genitourinary system', codeCount: 56 },
      { range: 'R40-R46', title: 'Symptoms and signs involving cognition, perception, emotional state', codeCount: 89 },
      { range: 'R47-R49', title: 'Symptoms and signs involving speech and voice', codeCount: 23 },
      { range: 'R50-R69', title: 'General symptoms and signs', codeCount: 123 },
      { range: 'R70-R79', title: 'Abnormal findings on examination of blood', codeCount: 67 },
      { range: 'R80-R82', title: 'Abnormal findings on examination of urine', codeCount: 34 },
      { range: 'R83-R89', title: 'Abnormal findings on examination of other body fluids', codeCount: 45 },
      { range: 'R90-R94', title: 'Abnormal findings on diagnostic imaging', codeCount: 56 },
      { range: 'R97', title: 'Abnormal tumor markers', codeCount: 12 },
      { range: 'R99', title: 'Ill-defined and unknown cause of mortality', codeCount: 8 }
    ]
  },
  {
    id: 's00-t88',
    range: 'S00-T88',
    title: 'Injury, poisoning and certain other consequences of external causes',
    chapter: 'Chapter 19',
    subcategories: [
      { range: 'S00-S09', title: 'Injuries to the head', codeCount: 234 },
      { range: 'S10-S19', title: 'Injuries to the neck', codeCount: 89 },
      { range: 'S20-S29', title: 'Injuries to the thorax', codeCount: 156 },
      { range: 'S30-S39', title: 'Injuries to the abdomen, lower back, lumbar spine, pelvis', codeCount: 123 },
      { range: 'S40-S49', title: 'Injuries to the shoulder and upper arm', codeCount: 78 },
      { range: 'S50-S59', title: 'Injuries to the elbow and forearm', codeCount: 89 },
      { range: 'S60-S69', title: 'Injuries to the wrist, hand and fingers', codeCount: 167 },
      { range: 'S70-S79', title: 'Injuries to the hip and thigh', codeCount: 67 },
      { range: 'S80-S89', title: 'Injuries to the knee and lower leg', codeCount: 123 },
      { range: 'S90-S99', title: 'Injuries to the ankle and foot', codeCount: 89 },
      { range: 'T07-T88', title: 'Injuries involving multiple body regions, effects of external causes', codeCount: 345 }
    ]
  },
  {
    id: 'v00-y99',
    range: 'V00-Y99',
    title: 'External causes of morbidity',
    chapter: 'Chapter 20',
    subcategories: [
      { range: 'V00-V09', title: 'Pedestrian injured in transport accident', codeCount: 89 },
      { range: 'V10-V19', title: 'Pedal cyclist injured in transport accident', codeCount: 67 },
      { range: 'V20-V29', title: 'Motorcycle rider injured in transport accident', codeCount: 78 },
      { range: 'V30-V39', title: 'Occupant of three-wheeled motor vehicle injured', codeCount: 56 },
      { range: 'V40-V49', title: 'Car occupant injured in transport accident', codeCount: 123 },
      { range: 'V50-V59', title: 'Occupant of pick-up truck or van injured', codeCount: 89 },
      { range: 'V60-V69', title: 'Occupant of heavy transport vehicle injured', codeCount: 67 },
      { range: 'V70-V79', title: 'Bus occupant injured in transport accident', codeCount: 45 },
      { range: 'V80-V89', title: 'Other land transport accidents', codeCount: 134 },
      { range: 'V90-V94', title: 'Water transport accidents', codeCount: 34 },
      { range: 'V95-V97', title: 'Air and space transport accidents', codeCount: 23 },
      { range: 'W00-W19', title: 'Slipping, tripping, stumbling and falls', codeCount: 89 },
      { range: 'W20-W49', title: 'Exposure to inanimate mechanical forces', codeCount: 156 },
      { range: 'W50-W64', title: 'Exposure to animate mechanical forces', codeCount: 67 },
      { range: 'W65-W74', title: 'Accidental non-transport drowning and submersion', codeCount: 34 },
      { range: 'W85-W99', title: 'Exposure to electric current, radiation and extreme temperatures', codeCount: 78 },
      { range: 'X00-X08', title: 'Exposure to smoke, fire and flames', codeCount: 45 },
      { range: 'X10-X19', title: 'Contact with heat and hot substances', codeCount: 34 },
      { range: 'X30-X39', title: 'Exposure to forces of nature', codeCount: 56 },
      { range: 'X50', title: 'Overexertion and strenuous or repetitive movements', codeCount: 12 },
      { range: 'X52-X58', title: 'Accidental exposure to other specified factors', codeCount: 23 },
      { range: 'X71-X83', title: 'Intentional self-harm', codeCount: 67 },
      { range: 'X92-Y09', title: 'Assault', codeCount: 89 },
      { range: 'Y21-Y33', title: 'Event of undetermined intent', codeCount: 45 },
      { range: 'Y35-Y38', title: 'Legal intervention, operations of war', codeCount: 23 },
      { range: 'Y62-Y84', title: 'Complications of medical and surgical care', codeCount: 134 },
      { range: 'Y90-Y99', title: 'Supplementary factors related to causes of morbidity', codeCount: 56 }
    ]
  },
  {
    id: 'z00-z99',
    range: 'Z00-Z99',
    title: 'Factors influencing health status and contact with health services',
    chapter: 'Chapter 21',
    subcategories: [
      { range: 'Z00-Z13', title: 'Persons encountering health services for examinations', codeCount: 123 },
      { range: 'Z14-Z15', title: 'Genetic carrier and genetic susceptibility to disease', codeCount: 23 },
      { range: 'Z16', title: 'Resistance to antimicrobial drugs', codeCount: 34 },
      { range: 'Z17', title: 'Estrogen receptor status', codeCount: 8 },
      { range: 'Z18', title: 'Retained foreign body fragments', codeCount: 12 },
      { range: 'Z19', title: 'Hormone sensitivity malignancy status', codeCount: 5 },
      { range: 'Z20-Z29', title: 'Persons with potential health hazards related to communicable diseases', codeCount: 89 },
      { range: 'Z30-Z39', title: 'Persons encountering health services in circumstances related to reproduction', codeCount: 78 },
      { range: 'Z40-Z53', title: 'Persons encountering health services for specific procedures and treatment', codeCount: 156 },
      { range: 'Z55-Z65', title: 'Persons with potential health hazards related to socioeconomic circumstances', codeCount: 67 },
      { range: 'Z66', title: 'Do not resuscitate', codeCount: 3 },
      { range: 'Z67', title: 'Blood type', codeCount: 8 },
      { range: 'Z68', title: 'Body mass index', codeCount: 45 },
      { range: 'Z69-Z76', title: 'Persons encountering health services in other circumstances', codeCount: 89 },
      { range: 'Z77-Z99', title: 'Persons with potential health hazards related to family and personal history', codeCount: 234 }
    ]
  },
  {
    id: 'u00-u85',
    range: 'U00-U85',
    title: 'Codes for special purposes',
    chapter: 'Chapter 22',
    subcategories: [
      { range: 'U00-U49', title: 'Provisional assignment of new diseases of uncertain etiology', codeCount: 23 },
      { range: 'U50-U85', title: 'Provisional assignment for research and evaluation', codeCount: 12 }
    ]
  }
];

const ICD10Codes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const chaptersPerPage = 1;

  const filteredChapters = icd10Chapters.map(chapter => ({
    ...chapter,
    subcategories: chapter.subcategories.filter(sub =>
      sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.range.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(chapter => chapter.subcategories.length > 0);

  const totalPages = Math.ceil(filteredChapters.length / chaptersPerPage);
  const startIndex = (currentPage - 1) * chaptersPerPage;
  const endIndex = startIndex + chaptersPerPage;
  const currentChapters = filteredChapters.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full text-[#143151] text-sm font-medium mb-6 border border-blue-200/40">
            <BookOpen className="w-4 h-4 mr-2" />
            ICD-10-CM Classification System
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#143151] mb-6">
            ICD-10 Code Directory
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive ICD-10-CM code classification system organized by chapters and categories. 
            Find the right codes for accurate medical billing and documentation.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto px-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-[#387E89] transition-colors" />
              <Input
                type="text"
                placeholder="Search ICD-10 codes, categories, or conditions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 sm:h-14 text-base sm:text-lg bg-white border-2 border-gray-200 rounded-2xl focus:border-[#387E89] focus:ring-4 focus:ring-[#387E89]/20 shadow-lg transition-all duration-200 text-gray-900 placeholder:text-gray-500"
                data-api-search="icd10-codes"
              />
            </div>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="space-y-12 mb-12" data-api-chapters="icd10-chapters">
          {currentChapters.map((chapter) => (
            <Card key={chapter.id} className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="text-sm font-mono bg-[#387E89]/10 text-[#387E89] border-[#387E89]/30">
                    {chapter.chapter}
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                    {chapter.subcategories.length} categories
                  </Badge>
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-[#143151] mb-2">
                  {chapter.range}
                </CardTitle>
                <p className="text-lg text-gray-600 font-medium">
                  {chapter.title}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4" data-api-subcategories={chapter.id}>
                  {chapter.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.range}
                      to={`/icd10-codes/${subcategory.range.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="group block"
                    >
                      <Card className="bg-white border border-gray-200/60 hover:border-[#387E89]/30 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="outline" className="text-xs font-mono bg-blue-50 text-blue-700 border-blue-200">
                                  {subcategory.range}
                                </Badge>
                                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-500">
                                  {subcategory.codeCount}+ codes
                                </Badge>
                              </div>
                              <h3 className="text-base sm:text-lg font-semibold text-[#143151] group-hover:text-[#387E89] transition-colors">
                                {subcategory.title}
                              </h3>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#387E89] group-hover:translate-x-1 transition-all duration-200" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mb-16" data-api-pagination="icd10-chapters">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    className={currentPage <= 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={page === currentPage}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {/* About ICD-10-CM Section */}
        <div className="mb-16" data-api-section="about-icd10">
          <Card className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-[#143151]">
                <Info className="w-6 h-6 mr-3 text-[#387E89]" />
                About ICD-10-CM
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                The International Classification of Diseases, 10th Revision, Clinical Modification (ICD-10-CM) serves as the standard diagnostic tool used by healthcare professionals worldwide to classify and code diagnoses, symptoms, and medical procedures with precision and consistency.
              </p>
              <p className="text-gray-600 leading-relaxed">
                ICD-10-CM is systematically structured into 22 distinct chapters, with each chapter dedicated to specific body systems or categories of medical conditions. Every chapter is identified by a unique code range (such as A00-B99 for infectious and parasitic diseases). The coding system utilizes 3-7 character codes, where the first character is always a letter (A-Z) followed by numbers or additional letters.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This comprehensive code browser enables healthcare professionals to navigate the complete ICD-10-CM classification system, access detailed information about individual codes, and understand the hierarchical relationships between different diagnostic categories. Users can efficiently browse by chapter, explore specific categories, or search for particular codes to ensure accurate medical documentation and billing compliance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-[#143151] to-[#387E89] border-0 shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Streamline Your Coding Process?
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Use S10.AI's intelligent coding assistant to ensure accurate ICD-10 code selection 
                and reduce documentation time.
              </p>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 bg-white text-[#143151] font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
              >
                Start Coding with S10.AI
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ICD10Codes;
