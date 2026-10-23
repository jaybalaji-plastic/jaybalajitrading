import { CompanyInfo } from '@/types/company';

// Exact Google Maps location provided for Jay Balaji Trading Morbi
const googleMapsUrl = 'https://maps.google.com/maps?q=22.81539535522461%2C70.82484436035156&z=17&hl=en';
const googleMapsEmbedUrl = 'https://maps.google.com/maps?q=22.81539535522461%2C70.82484436035156&z=17&hl=en&output=embed';

export const companyData: CompanyInfo = {
  name: 'Jay Balaji Trading',
  brandShort: 'JBT',
  tagline: 'Quality Pipes. Reliable Supply.',
  category: 'Garden Pipe and Suction Pipe Supplier',
  address: {
    line1: '5/6, Lati Plot',
    city: 'Morbi',
    pincode: '363641',
    state: 'Gujarat',
    country: 'India',
    full: '5/6, Lati Plot, Morbi - 363641, Gujarat, India',
    googleMapsUrl,
    googleMapsEmbedUrl,
  },
  email: 'jaybalajitrading999@gmail.com',
  contacts: [
    {
      name: 'Meet Kundariya',
      phone: '+919974928731',
      phoneDisplay: '+91 99749 28731',
    },
  ],
  whatsappNumber: '+919974928731',
};
