import { ProductCategoryInfo } from '@/types/product';

export const productCategories: ProductCategoryInfo[] = [
  {
    id: 'petrol-pipe',
    name: 'Petrol Pipe',
    slug: 'petrol-pipe',
    tagline: 'Flexible & Chemical Resistant PVC Hose',
    description: 'High quality flexible PVC pipe suitable for multi-purpose fluid conveyance, fuel handling, agricultural irrigation, and industrial applications.',
    image: '/images/products/petrol-pipe/petrol-pipe-main.png',
    features: [
      'Chemical & weather resistant PVC formula',
      'High flexibility with anti-kinking behavior',
      'Lightweight and easily transportable',
      'Available in 30 m and 50 m coil lengths'
    ],
    sizeRange: '3/4" to 1 1/4"'
  },
  {
    id: 'braided-pipe',
    name: 'Braided Pipe',
    slug: 'braided-pipe',
    tagline: 'High-Durability Reinforced PVC Hose',
    description: 'Engineered with an embedded braided reinforcement layer to withstand elevated internal pressure while retaining flexibility and kink-resistance.',
    image: '/images/products/braided-pipe/braided-pipe-main.png',
    features: [
      'Multi-layer reinforced braided yarn construction',
      'Withstands higher operational water pressure',
      'Smooth inner core ensures maximum discharge flow',
      'Ideal for heavy garden, commercial, and farm use'
    ],
    sizeRange: '3/4" to 1 1/4"'
  },
  {
    id: 'suction-pipe',
    name: 'Suction Pipe',
    slug: 'suction-pipe',
    tagline: 'Heavy-Duty Corrugated Suction & Delivery Hose',
    description: 'Rugged corrugated PVC suction hose designed for severe suction and discharge duties in agricultural pumping, civil construction, and water management.',
    image: '/images/products/suction-pipe/suction-pipe-main.png',
    features: [
      'Heavy-duty corrugated external reinforcement',
      'Vacuum collapse and crush resistant',
      'Broad sizing spectrum from 3/4" up to 6" diameter',
      'Reliable performance for high-output pump sets'
    ],
    sizeRange: '3/4" up to 6"'
  },
  {
    id: 'metallic-pipe',
    name: 'Metallic Pipe',
    slug: 'metallic-pipe',
    tagline: 'Reinforced PVC Hose with Metal Spiral Wire',
    description: 'Transparent/translucent PVC hose integrated with an embedded high-tensile steel wire spiral for exceptional vacuum durability and kink resistance.',
    image: '/images/products/metallic-pipe/metallic-pipe-main.png',
    features: [
      'Embedded galvanized steel spring wire spiral',
      'Resists negative pressure and internal vacuum collapse',
      'Crystal smooth internal bore minimizes friction loss',
      'PVC formulation with metal spiral reinforcement'
    ],
    sizeRange: '3/4"'
  }
];
