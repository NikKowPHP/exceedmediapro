export const footerConfig = {
  aboutLinks: [
    {
      title: 'Services',
      href: '/services',
      isRoute: false,
    },
    {
      title: 'Process',
      href: '/process',
      isRoute: false,
    },
    {
      title: 'Contact',
      href: 'contact',
      isRoute: false,
    },
    {
      title: 'Benefits',
      href: '/benefits',
      isRoute: false,
    },
    {
      title: 'Pricing',
      href: '/pricing',
      isRoute: false,
    },
  ],
  pageLinks: [
   
    {
      title: 'Home',
      href: '/',
      isRoute: true,
    },
    {
      title: 'Coming Soon',
      href: '/coming-soon',
      isRoute: true,
    },
    {
      title: '404',
      href: '/404',
      isRoute: true,
    },
  ],
  socialLinks: [
    {
      title: 'X',
      href: 'https://x.com/rosemedical',
      isRoute: false,
      icon: 'X',
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/rosemedical',
      isRoute: false,
      icon: 'Instagram',
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/company/rosemedical',
      isRoute: false,
      icon: 'LinkedIn',
    },
    {
      title: 'Facebook',
      href: 'https://www.facebook.com/rosemedical',
      isRoute: false,
      icon: 'Facebook',
    },
    {
      title: 'Threads',
      href: 'https://www.threads.net/rosemedical',
      isRoute: false,
      icon: 'Threads',
    },
  ],
} as const 
