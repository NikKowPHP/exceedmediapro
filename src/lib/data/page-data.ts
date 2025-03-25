
export interface HowItWorksItem {
    id: string
    title: string
    content: string
  }
   export const howItWorksItems: HowItWorksItem[] = [

    {
        id: 'items.item1',
        title: 'Free Consultation',
        content: 'Briefing Completion',
      },
      {
        id: 'items.item2',
        title: 'Strategy Development',
        content: 'Market Research',
      },
      {
        id: 'items.item3',
        title: 'Implementation',
        content: 'Campaign Launch',
      },
      {
        id: 'items.item4',
        title: 'Reporting',
        content: 'Performance Analysis',
      },
      {
        id: 'items.item5',
        title: 'Ongoing Support',
        content: 'Performance Analysis',
      },
      {
        id: 'items.item6',
        title: 'Ongoing Support',
        content: 'Performance Analysis',
      },
      {
        id: 'items.item7',
        title: 'Ongoing Support',
        content: 'Performance Analysis',
     },
     {
        id: 'items.item8',
        title: 'Ongoing Support',
        content: 'Performance Analysis',
     },
     {
        id: 'items.item9',
        title: 'Ongoing Support',
        content: 'Performance Analysis',
     },
     {
        id: 'items.item10',
        title: 'Ongoing Support',
        content: 'Performance Analysis',
     },
    
  ]
  
  export  function getHowItWorksItems(): HowItWorksItem[] {
    return howItWorksItems
  }