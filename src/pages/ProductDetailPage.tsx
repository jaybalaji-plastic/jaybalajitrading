import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Scale,
  Layers,
  Ruler,
  Info,
  CheckCircle2,
  PhoneCall,
  Package,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/common/Button';
import { ProductCard } from '@/components/products/ProductCard';
import { ContactForm } from '@/components/forms/ContactForm';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';
import { getProductBySlug, getRelatedProducts } from '@/utils/productHelpers';
import { buildWhatsAppUrl, formatTelLink } from '@/utils/formatters';
import { companyData } from '@/data/company';
import { SEO } from '@/components/common/SEO';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <SEO
          title="Product Not Found | Jay Balaji Trading"
          description="The requested pipe product was not found in our catalogue."
          canonicalPath="/products"
        />
        <Container size="sm" className="space-y-6">
          <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
            <Package className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold font-display text-slate-900">
            Product Not Found
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            The product specification you are looking for does not exist in our current catalogue or may have moved.
          </p>
          <div className="pt-2">
            <Button to="/products" variant="primary" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
              Return to Products Catalogue
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.slug, product.category, 4);

  // Quick WhatsApp enquiry text directed to Meet Kundariya
  const quickWhatsAppMessage = `Hello Meet Kundariya! I am interested in inquiring from Jay Balaji Trading website about ${product.name} (${product.category}, Size: ${product.size}, Weight: ${product.approxWeight}). Please share latest wholesale availability and quotation.`;
  const whatsappUrl = buildWhatsAppUrl(companyData.whatsappNumber, quickWhatsAppMessage);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://jaybalajitrading.vercel.app${product.image}`,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'Jay Balaji Trading (JBT)',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'WholesaleStore',
        name: 'Jay Balaji Trading',
        telephone: '+919974928731',
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Size',
        value: product.size,
      },
      {
        '@type': 'PropertyValue',
        name: 'Approx Weight',
        value: product.approxWeight,
      },
      {
        '@type': 'PropertyValue',
        name: 'Standard Length',
        value: product.availableLengths.join(', '),
      },
      {
        '@type': 'PropertyValue',
        name: 'Material',
        value: product.material,
      },
    ],
  };

  return (
    <div className="py-8 sm:py-12 pb-24 space-y-12 sm:space-y-16">
      <SEO
        title={`${product.name} - ${product.size} | Jay Balaji Trading (JBT) Morbi`}
        description={`${product.name} (${product.size}) specification by Jay Balaji Trading Morbi: Approx Weight ${product.approxWeight}, Material ${product.material}, Standard Lengths ${product.availableLengths.join(', ')}. Best wholesale rates in Morbi, Gujarat.`}
        keywords={`${product.name}, ${product.category}, ${product.size} pipe, Best Pipes in morbi, Best Pipes, JBT, Jay Balaji Trading, Jay Bajarang Treding, Suction Pipe Gujarat, Morbi PVC Pipes`}
        canonicalPath={`/products/${product.slug}`}
        schema={productSchema}
      />
      <Container size="xl" className="space-y-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Products', to: '/products' },
            { label: product.category, to: `/products?category=${product.categorySlug}` },
            { label: product.name },
          ]}
        />

        {/* Back link */}
        <div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-brand-teal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* Main Product Showcase Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12">
            {/* Left: Product Photograph */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="relative w-full aspect-square bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-10 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} - Jay Balaji Trading`}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide bg-brand-teal text-white shadow-sm">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-white text-brand-dark border border-slate-200 shadow-sm">
                    Size: {product.size}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400 text-center">
                High-resolution product representation • Exact packaging may vary by length
              </p>
            </div>

            {/* Right: Product Details & Specs */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-orange-50 text-brand-orange border border-brand-orange-200">
                  <span>Verified Specification</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
                  {product.name}
                </h1>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Specifications Grid */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <Scale className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs text-slate-500 uppercase tracking-wider font-semibold">
                        Approx. Weight
                      </span>
                      <span className="text-base font-bold text-slate-900">
                        {product.approxWeight}
                      </span>
                      <span className="block text-[10px] text-slate-400 mt-0.5">
                        *As per standard packaging coil
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <Layers className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs text-slate-500 uppercase tracking-wider font-semibold">
                        Material
                      </span>
                      <span className="text-base font-bold text-slate-900">
                        {product.material}
                      </span>
                      <span className="block text-[10px] text-slate-400 mt-0.5">
                        High grade PVC composition
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 sm:col-span-2">
                    <Ruler className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs text-slate-500 uppercase tracking-wider font-semibold">
                        Available Coil Lengths
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        {product.availableLengths.map((len, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-xs font-bold text-slate-800"
                          >
                            {len}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Material note if present (e.g. Metallic Pipe PVC note) */}
                {product.materialNote && (
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5 leading-relaxed">
                    <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block mb-0.5">Specification Clarification:</strong>
                      {product.materialNote}
                    </div>
                  </div>
                )}

                {/* Feature Highlights */}
                <div className="pt-2 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Product Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {product.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#168039] hover:bg-[#12682e] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-[0_4px_16px_rgba(22,128,57,0.35)] hover:shadow-[0_6px_22px_rgba(22,128,57,0.5)] transition-all active:scale-[0.98] group"
                >
                  <WhatsAppIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>GET QUOTE ON WHATSAPP</span>
                </a>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setShowEnquiryForm(!showEnquiryForm)}
                  className="flex-1 justify-center shadow-orange-glow/50 py-4 font-bold"
                >
                  {showEnquiryForm ? 'Close Enquiry Form' : 'Request Official Quote'}
                </Button>
              </div>

              {/* Direct Calling Strip */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
                <span className="flex items-center gap-1.5 font-medium">
                  <PhoneCall className="w-3.5 h-3.5 text-brand-teal" />
                  Call sales directly:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={formatTelLink(companyData.contacts[0].phone)}
                    className="hover:text-brand-orange transition-colors font-semibold text-slate-800"
                  >
                    {companyData.contacts[0].name} ({companyData.contacts[0].phoneDisplay})
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible / Visible Enquiry Form */}
        {showEnquiryForm && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-300">
            <ContactForm
              initialCategory={product.category}
              initialSize={product.size}
              productName={product.name}
            />
          </div>
        )}

        {/* Related Products from Same Category */}
        {relatedProducts.length > 0 && (
          <div className="pt-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                  Related {product.category} Products
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Other available size options in this pipe category.
                </p>
              </div>

              <Link
                to={`/products?category=${product.categorySlug}`}
                className="text-xs sm:text-sm font-semibold text-brand-teal hover:text-brand-orange transition-colors"
              >
                View All {product.category} ({relatedProducts.length + 1}) →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};