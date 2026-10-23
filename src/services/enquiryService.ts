import { EnquiryFormData, EnquirySubmissionResult } from '@/types/company';
import { companyData } from '@/data/company';
import { buildWhatsAppUrl } from '@/utils/formatters';

export class EnquiryService {
  /**
   * Format a clean, human-readable message for WhatsApp enquiry transmission
   */
  private static formatMessageBody(data: EnquiryFormData): string {
    return [
      `*Product Enquiry - Jay Balaji Trading (JBT)*`,
      `*Attention:* Meet Kundariya (+91 99749 28731)`,
      `---------------------------------------`,
      `*Customer Name:* ${data.fullName}`,
      `*Mobile Number:* ${data.mobileNumber}`,
      data.email ? `*Customer Email:* ${data.email}` : null,
      `*Product Category:* ${data.category || 'General Enquiry'}`,
      data.pipeSize ? `*Required Size:* ${data.pipeSize}` : null,
      data.length ? `*Required Length:* ${data.length}` : null,
      data.quantity ? `*Estimated Quantity:* ${data.quantity}` : null,
      data.message ? `*Notes / Message:* ${data.message}` : null,
      `---------------------------------------`,
      `Sent via Jay Balaji Trading Website WhatsApp Portal`
    ]
      .filter(Boolean)
      .join('\n');
  }

  /**
   * Process enquiry submission exclusively via WhatsApp to Meet Kundariya.
   */
  public static async submitEnquiry(
    data: EnquiryFormData
  ): Promise<EnquirySubmissionResult> {
    // Simulate brief client-side network transition for realistic UI feedback
    await new Promise((resolve) => setTimeout(resolve, 500));

    const formattedBody = this.formatMessageBody(data);
    const whatsappUrl = buildWhatsAppUrl(companyData.whatsappNumber, formattedBody);

    return {
      success: true,
      mode: 'whatsapp',
      actionUrl: whatsappUrl,
      message: 'Your enquiry is prepared! WhatsApp will open directly to message Meet Kundariya (+91 99749 28731).',
    };
  }
}
