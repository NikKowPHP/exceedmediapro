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
        title: 'Ready to Use',
        content: 'Eliminates downtime waiting for autoclaving. Instruments are available immediately when you need them. Streamline procedures and optimize your schedule.',
        icon: 'Newspaper'
      },
      {
        id: 'items.item2',
        title: 'Consistent Quality',
        content: 'Ensures that the quality and properties of the equipment are not compromised by repeated use. Precise performance with every procedure.',
        icon: 'Star'
      },
      {
        id: 'items.item3',
        title: 'Comprehensive Range',
        content: '	Biopsy Products •	ERCP Instruments •	EMR Instruments •	ESD Instruments •	Grasping Forceps •	Hemoclips •	Retrieval Baskets •	Other Products',
        icon: 'Flag'
      },
    
  ]
  
  export  function getWhyUsItems():   WhyUsItem[] {
    return whyUsItems
  }
  export  function getProcessItems(): ProcessItem[] {
    return processItems
  }
