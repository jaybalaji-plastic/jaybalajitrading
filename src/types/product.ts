export type PipeCategory = 
  | 'Petrol Pipe'
  | 'Braided Pipe'
  | 'Suction Pipe'
  | 'Metallic Pipe';

export interface PipeProduct {
  id: string;
  slug: string;
  name: string;
  category: PipeCategory;
  categorySlug: string;
  size: string;
  approxWeight: string; // e.g. "5.5 kg" (preserved as approximate)
  material: string; // e.g. "PVC"
  materialNote?: string; // Optional note regarding material details (e.g. metal spiral PVC)
  availableLengths: string[]; // e.g. ["30 m", "50 m"]
  image: string;
  thumbnail: string;
  description: string;
  highlights: string[];
  isFeatured?: boolean;
}

export interface ProductCategoryInfo {
  id: string;
  name: PipeCategory;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  sizeRange: string;
}

export interface ProductFilterState {
  searchQuery: string;
  category: string;
  size: string;
  material: string;
}
