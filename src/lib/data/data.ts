import { Flag, Newspaper, Star } from "lucide-react"

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
      { id: '8', name: 'multiPagePlan.features.support' },
    ],
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
