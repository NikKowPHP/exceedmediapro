import { Flag, Layers, Layers2, Layers3, Newspaper, Star } from "lucide-react"

export interface ProcessItem {
    id: string
    title: string
    content: string
    image_url: string
  }
  export interface WhyUsItem {
    id: string
    title: string
    content: string
    icon: keyof typeof LucideIcons;
  }
  export const LucideIcons = {
    Newspaper: Newspaper,
    Star: Star,
    Flag: Flag,
    Layers: Layers,
    Layers2: Layers2,
    Layers3: Layers3,
  };

  export interface PricingFeature {
    id: string
    name: string
  }
  
  export interface PricingPlan {
    id: string
    title: string
    description: string
    price: string
    pricePrefix?: string
    features: PricingFeature[]
    deliveryTime?: string
    icon: keyof typeof LucideIcons;
  }

  export interface TestimonialsItem {
    id: string
    name: string
    role: string
    content: string
    image_url: string
  }
  
  
   export const processItems: ProcessItem[] = [

    {
        id: 'items.item1',
        title: 'Google Ads Campaigns',
        content: 'Boost visibility with tailored Google and YouTube ads, including keyword optimization, ad copywriting, and remarketing strategies.',
        image_url: '/images/services/google-ads.svg'
      },
      {
        id: 'items.item2',
        title: 'Meta Ads Campaigns',
        content: 'Drive engagement on Facebook and Instagram with audience targeting, creative ad designs, and scalable campaigns.',
        image_url: '/images/services/google-ads.svg'
      },
      {
        id: 'items.item3',
        title: 'Social Media Marketing (SMM)',
        content: 'Strengthen your online presence with content creation, visual design, community management, and analytics tracking.',
        image_url: '/images/services/google-ads.svg'
      },
      {
        id: 'items.item4',
        title: 'Google Ads Campaigns',
        content: 'Boost visibility with tailored Google and YouTube ads, including keyword optimization, ad copywriting, and remarketing strategies.',
      image_url: '/images/services/google-ads.svg'
      },
      {
        id: 'items.item5',
        title: 'Meta Ads Campaigns',
        content: 'Drive engagement on Facebook and Instagram with audience targeting, creative ad designs, and scalable campaigns.',
        image_url: '/images/services/google-ads.svg'
      },
      {
        id: 'items.item6',
        title: 'Social Media Marketing (SMM)',
        content: 'Strengthen your online presence with content creation, visual design, community management, and analytics tracking.',
        image_url: '/images/services/google-ads.svg'
      },
    
  ]
  






  export const whyUsItems: WhyUsItem[] = [

    {
        id: 'items.item1',
        title: 'Focus on Real Sales',
        content: 'We prioritize increasing real sales and attracting a highly interested audience.',
        icon: 'Newspaper'
      },
      {
        id: 'items.item2',
        title: 'Weekly Reports',
        content: 'Receive detailed reports on results and budget usage every week.',
        icon: 'Star'
      },
      {
        id: 'items.item3',
        title: 'Officially Registered Agency',
        content: 'We provide invoices for all services.',
        icon: 'Flag'
      },
    
  ]


export const pricingPlanAnually: PricingPlan[] = [
  {
    id: 'one-page',
    title: 'Starter Plan',
    description: 'Designed for small businesses or startups looking to establish their online presence.',
    price: '900 PLN',
    features: [
      { id: '1', name: 'Google Ads setup & basic campaign management.' },
      { id: '2', name: 'Google Ads setup & basic campaign management.' },
      { id: '3', name: 'Google Ads setup & basic campaign management.' },
      { id: '4', name: 'Google Ads setup & basic campaign management.' },
    ],
    icon: 'Layers'
  },
  {
    id: 'multi-page',
    title: 'Pro Plan',
    description: 'Designed for small businesses or startups looking to establish their online presence.',
    price: '1990 PLN',
    pricePrefix: 'from',
    features: [
      { id: '1', name: 'Google Ads setup & basic campaign management.' },
      { id: '2', name: 'Google Ads setup & basic campaign management.' },
      { id: '3', name: 'Google Ads setup & basic campaign management.' },
      { id: '4', name: 'Google Ads setup & basic campaign management.' },
      { id: '5', name: 'Googe Ads setup & basic campaign management.' },
      { id: '8', name: 'multiPagePlan.features.support' },
    ],
    icon: 'Layers2'
  }
]
export const pricingPlanMonthly: PricingPlan[] = [
  {
    id: 'one-page',
    title: 'Starter Plan',
    description: 'Designed for small businesses or startups looking to establish their online presence.',
    price: '900 PLN',
    features: [
      { id: '1', name: 'Google Ads setup & basic campaign management.' },
      { id: '2', name: 'Google Ads setup & basic campaign management.' },
      { id: '3', name: 'Google Ads setup & basic campaign management.' },
      { id: '4', name: 'Google Ads setup & basic campaign management.' },
    ],
    icon: 'Layers'
  },
  {
    id: 'multi-page',
    title: 'multiPagePlan.title',
    description: 'multiPagePlan.description',
    price: '1990 PLN',
    pricePrefix: 'from',
    features: [
      { id: '1', name: 'Google Ads setup & basic campaign management.' },
      { id: '2', name: 'Google Ads setup & basic campaign management.' },
      { id: '3', name: 'Google Ads setup & basic campaign management.' },
      { id: '4', name: 'Google Ads setup & basic campaign management.' },
      { id: '5', name: 'Googe Ads setup & basic campaign management.' },
  
    ],
    icon: 'Layers2'
  }
]

export const testimonialsItems: TestimonialsItem[] = [
  {
    id: 'testimonial1',
    name: 'Anna Kowalska',
    role: 'Manager, Złota Biżuteria',
    content: 'With a €370K budget, we earned €2.1M in revenue and 46K conversions, achieving a 571% ROAS.',
    image_url: '/images/client1.webp'
  },
  {
    id: 'testimonial2',
    name: 'John Doe',
    role: 'CEO, Example Company',
    content: 'Our sales increased by 200% within the first three months of working with this team.',
    image_url: '/images/client1.webp'
  },
  {
    id: 'testimonial3',
    name: 'Jane Smith',
    role: 'Marketing Director, Sample Corp',
    content: 'The team provided excellent service and helped us achieve our marketing goals efficiently.',
    image_url: '/images/client1.webp'
  }
]

export  function getPricingPlans(): {anually: PricingPlan[], monthly: PricingPlan[]} {
  return {
    anually: pricingPlanAnually,
    monthly: pricingPlanMonthly
  }
} 

  
  export  function getWhyUsItems():   WhyUsItem[] {
    return whyUsItems
  }
  export  function getProcessItems(): ProcessItem[] {
    return processItems
  }

  export  function getTestimonialsItems(): TestimonialsItem[] {
    return testimonialsItems
  }