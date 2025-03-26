import dynamic from 'next/dynamic'


export const HeroSection = dynamic(
  () =>
    import('@/components/sections/hero').then((mod) => mod.HeroSection),
  {
    ssr: true,
  }
)


export const SliderSection = dynamic(
  () =>
    import('@/components/sections/slider-section.server').then(
      (mod) => mod.default
    ),
  {
    ssr: true,
  }
)

export const ServicesSection= dynamic(
  () =>
    import('@/components/sections/Services').then(
      (mod) => mod.ServicesSection
    ),
  {
    ssr: true,
  }
)

export const HowItWorksSection = dynamic(
  () =>
    import('@/components/sections/HowItWorks').then(
      (mod) => mod.HowItWorksSection
    ),
  {
    ssr: true,
  }
)



export const ProductSection = dynamic(
  () =>
    import('@/components/sections/product-section.server').then(
      (mod) => mod.default
    ),
  { 
    ssr: true,
  }
)



export const QuoteSection = dynamic(
  () => import('@/components/sections/quote-section').then(mod => mod.QuoteSection),
  {
    ssr: true,
  }
)

export const SubHeroSection = dynamic(
  () => import('@/components/sections/subhero').then(mod => mod.SubHeroSection),
  {
    ssr: true,
  }
)



export const FaqSection = dynamic(
  () => import('@/components/sections/faq-section.server').then(mod => mod.default),
  {
    ssr: true,
  }
)

export const CtaSection = dynamic(
  () => import('@/components/sections/cta-section').then(mod => mod.CtaSection),
  {
    ssr: true,
  }
)

export const ContactSection = dynamic(
  () => import('@/components/sections/contact-section').then(mod => mod.ContactSection),
  {
    ssr: true,
  }
)

export const WhyUsSection = dynamic(
  () => import('@/components/sections/why_us-section').then(mod => mod.WhyUsSection),
  {
    ssr: true,
  }
)

export const Pricing = dynamic(
  () => import('@/components/sections/pricing').then(mod => mod.Pricing),
  {
    ssr: true,
  }
)

export const TestimonialsSection = dynamic(
  () => import('@/components/sections/testimonials-section').then(mod => mod.TestimonialsSection),
  {
    ssr: true,
  }
)

export const Form = dynamic(
  () => import('@/components/form').then(mod => mod.Form),
  {
    ssr: true,
  }
)