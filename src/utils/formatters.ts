/**
 * Construct an encoded WhatsApp URL with prefilled text
 */
export function buildWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}


/**
 * Standardize phone number for tel: link
 */
export function formatTelLink(phone: string): string {
  return `tel:${phone.replace(/\s+/g, '')}`;
}
