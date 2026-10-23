export interface ContactPerson {
  name: string;
  phone: string;
  phoneDisplay: string;
}

export interface CompanyInfo {
  name: string;
  brandShort: string;
  tagline: string;
  category: string;
  address: {
    line1: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    full: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
  };
  email: string;
  contacts: ContactPerson[];
  whatsappNumber: string;
}

export interface EnquiryFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  category: string;
  pipeSize: string;
  length: string;
  quantity: string;
  message: string;
}

export interface EnquirySubmissionResult {
  success: boolean;
  message: string;
  mode: 'whatsapp';
  actionUrl?: string;
}
