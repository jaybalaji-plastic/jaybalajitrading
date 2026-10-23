import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, MessageSquare, ExternalLink } from 'lucide-react';
import { EnquiryFormData, EnquirySubmissionResult } from '@/types/company';
import { productCategories } from '@/data/categories';
import { getDistinctSizes } from '@/utils/productHelpers';
import { EnquiryService } from '@/services/enquiryService';

interface ContactFormProps {
  initialCategory?: string;
  initialSize?: string;
  initialLength?: string;
  productName?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialCategory = '',
  initialSize = '',
  initialLength = '30 m',
  productName,
  className = '',
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    category: initialCategory,
    pipeSize: initialSize,
    length: initialLength,
    quantity: '',
    message: productName ? `I am inquiring about ${productName}. Please share wholesale pricing and availability.` : '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<EnquirySubmissionResult | null>(null);

  // Sync props if changed
  useEffect(() => {
    if (initialCategory) setFormData((prev) => ({ ...prev, category: initialCategory }));
    if (initialSize) setFormData((prev) => ({ ...prev, pipeSize: initialSize }));
    if (initialLength) setFormData((prev) => ({ ...prev, length: initialLength }));
  }, [initialCategory, initialSize, initialLength]);

  const availableSizes = getDistinctSizes(formData.category);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Please enter your contact mobile number.';
    } else {
      const cleanPhone = formData.mobileNumber.replace(/[^0-9]/g, '');
      if (cleanPhone.length < 10) {
        newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number.';
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const result = await EnquiryService.submitEnquiry(formData);
      setSubmissionResult(result);

      // Open WhatsApp chat in new tab with pre-filled message
      if (result.actionUrl) {
        window.open(result.actionUrl, '_blank', 'noopener,noreferrer');
      }
    } catch {
      setSubmissionResult({
        success: false,
        mode: 'whatsapp',
        message: 'An error occurred while preparing your WhatsApp enquiry. Please try again or message directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white rounded-2xl border border-slate-200/90 shadow-soft p-6 sm:p-8 lg:p-10 ${className}`}>
      {submissionResult && submissionResult.success ? (
        <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="font-display font-bold text-2xl text-slate-900">
              Enquiry Prepared for WhatsApp!
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {submissionResult.message}
            </p>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            {submissionResult.actionUrl && (
              <a
                href={submissionResult.actionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp with Meet Kundariya</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <button
              type="button"
              onClick={() => {
                setSubmissionResult(null);
                setFormData({
                  fullName: '',
                  mobileNumber: '',
                  email: '',
                  category: '',
                  pipeSize: '',
                  length: '30 m',
                  quantity: '',
                  message: '',
                });
              }}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Form Header */}
          <div className="border-b border-slate-100 pb-5">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
              Direct Product Enquiry & Quotation
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Connect directly with our sales team on WhatsApp for prompt wholesale rates and availability.
            </p>
          </div>

          {/* Dedicated WhatsApp Banner (replacing the old Email/WhatsApp selector) */}
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/90 text-emerald-900 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-sm text-emerald-950">Direct WhatsApp Submission</p>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full">
                  Instant Response
                </span>
              </div>
              <p className="text-xs text-emerald-700 mt-0.5">
                Submitting this form prepares your specifications directly for <strong className="font-bold text-emerald-950">Meet Kundariya (+91 99749 28731)</strong> on WhatsApp.
              </p>
            </div>
          </div>

          {/* Customer Details Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Ayush Loriya"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                  errors.fullName
                    ? 'border-rose-400 bg-rose-50 focus:ring-rose-400'
                    : 'border-slate-200 bg-slate-50 focus:ring-emerald-500 focus:bg-white'
                }`}
                required
              />
              {errors.fullName && (
                <p className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="mobileNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <input
                id="mobileNumber"
                type="tel"
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                placeholder="+91 99749 28731"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                  errors.mobileNumber
                    ? 'border-rose-400 bg-rose-50 focus:ring-rose-400'
                    : 'border-slate-200 bg-slate-50 focus:ring-emerald-500 focus:bg-white'
                }`}
                required
              />
              {errors.mobileNumber && (
                <p className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.mobileNumber}</span>
                </p>
              )}
            </div>
          </div>

          {/* Email row (Optional for inclusion in the WhatsApp enquiry message) */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Email Address <span className="text-slate-400 font-normal normal-case">(Optional - included in WhatsApp message)</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@business.com"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-rose-400 bg-rose-50 focus:ring-rose-400'
                  : 'border-slate-200 bg-slate-50 focus:ring-emerald-500 focus:bg-white'
              }`}
            />
            {errors.email && (
              <p className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Product Specifications Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Product Category
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value, pipeSize: '' })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white cursor-pointer"
              >
                <option value="">Select Category</option>
                {productCategories.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="pipeSize" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Required Pipe Size
              </label>
              {availableSizes.length > 0 ? (
                <select
                  id="pipeSize"
                  value={formData.pipeSize}
                  onChange={(e) => setFormData({ ...formData, pipeSize: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white cursor-pointer"
                >
                  <option value="">Select Size</option>
                  {availableSizes.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id="pipeSize"
                  type="text"
                  value={formData.pipeSize}
                  onChange={(e) => setFormData({ ...formData, pipeSize: e.target.value })}
                  placeholder="e.g. 1&quot; or 2&quot;"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                />
              )}
            </div>

            <div>
              <label htmlFor="length" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Required Length
              </label>
              <select
                id="length"
                value={formData.length}
                onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white cursor-pointer"
              >
                <option value="30 m">30 m Coil</option>
                <option value="50 m">50 m Coil</option>
                <option value="Custom Length">Custom Requirement</option>
              </select>
            </div>
          </div>

          {/* Quantity & Message */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="quantity" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Quantity <span className="text-slate-400 font-normal normal-case">(Kg)</span>
              </label>
              <input
                id="quantity"
                type="text"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="e.g. 100 kg"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Enquiry Notes or Specific Requirements
              </label>
              <textarea
                id="message"
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Specify delivery destination, application, or urgent questions..."
                className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white resize-none"
              />
            </div>
          </div>

          {/* Submit Action & Disclosure */}
          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              Direct submission: clicking opens WhatsApp with your prefilled specifications sent to <strong className="text-slate-700">Meet Kundariya</strong> (+91 99749 28731).
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-60 cursor-pointer shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isSubmitting ? 'Preparing WhatsApp Enquiry...' : 'Submit WhatsApp Enquiry'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
