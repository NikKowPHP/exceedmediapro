
export interface ProcessItem {
    id: string
    title: string
    content: string
  }
   export const processItems: ProcessItem[] = [

    {
        id: 'items.item1',
        title: 'Google Ads Campaigns',
        content: 'Boost visibility with tailored Google and YouTube ads, including keyword optimization, ad copywriting, and remarketing strategies.',
      },
      {
        id: 'items.item2',
        title: 'Meta Ads Campaigns',
        content: 'Drive engagement on Facebook and Instagram with audience targeting, creative ad designs, and scalable campaigns.',
      },
      {
        id: 'items.item3',
        title: 'Social Media Marketing (SMM)',
        content: 'Strengthen your online presence with content creation, visual design, community management, and analytics tracking.',
      },
      {
        id: 'items.item4',
        title: 'Google Ads Campaigns',
        content: 'Boost visibility with tailored Google and YouTube ads, including keyword optimization, ad copywriting, and remarketing strategies.',
      },
      {
        id: 'items.item5',
        title: 'Meta Ads Campaigns',
        content: 'Drive engagement on Facebook and Instagram with audience targeting, creative ad designs, and scalable campaigns.',
      },
      {
        id: 'items.item6',
        title: 'Social Media Marketing (SMM)',
        content: 'Strengthen your online presence with content creation, visual design, community management, and analytics tracking.',
      },
    
  ]
  
  export  function getProcessItems(): ProcessItem[] {
    return processItems
  }