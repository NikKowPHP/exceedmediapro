
export interface ProcessItem {
    id: string
    title: string
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
  
  export  function getProcessItems(): ProcessItem[] {
    return processItems
  }