export type GalleryCategory =
  | 'all'
  | 'car-vinyl'
  | 'commercial-sign'
  | 'apparel-htv'
  | 'paintings'
  | 'fine-art'
  | 'tattoo-flash'
  | 'web-digital'
  | 'fabrication-3d';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  specs: {
    material: string;
    toleranceOrMedium: string;
    turnaround: string;
    dimensionsOrScale?: string;
    finishType?: string;
    machineOrTool?: string;
  };
  featured?: boolean;
}

export type MediumType =
  | 'car-vinyl'
  | 'commercial-sign'
  | 'apparel-htv'
  | 'paintings'
  | 'fine-art'
  | 'tattoo-flash'
  | 'fabrication-3d'
  | 'web-digital';

export interface SpecBuilderForm {
  projectType: MediumType;
  projectTitle: string;
  dimensions: string;
  quantity: number;
  colorCount: number;
  materialFinish: string;
  vectorReadiness: 'ready-vector' | 'needs-vectorizing' | 'full-concept' | 'physical-sketch';
  deadlineUrgency: 'standard' | 'rush' | 'emergency-gig';
  budgetBracket: string;
  notes: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
}
