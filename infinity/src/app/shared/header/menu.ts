import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'Home',
        link: '/',
    },
    {
      id: 4,
      label: 'Branch',
      subItems: [
        {
            id: 5,
            label: 'Manage branch',
            link: '/catalog/list',
            parentId: 4
        },
      ]
    },
    {
      id: 7,
      label: 'Brand',
      subItems: [
        {
            id: 8,
            label: 'Manage brand',
            link: '/account/info',
            parentId: 7
        },
      ]
    },
    {
      id: 16,
      label: 'Vendor',
      subItems: [
        {
            id: 17,
            label: 'Sell Car',
            link: '/vendor/sell-car',
            parentId: 16
        },
        {
            id: 18,
            label: 'Ad Promotion Page',
            link: '/vendor/property-promotion',
            parentId: 16
        },
        {
          id: 19,
          label: 'Vendor Page',
          link: '/vendor/vendor',
          parentId: 16
        },
      ]
    },
    {
      id: 21,
      label: 'Pages',
      subItems: [
        {
            id: 22,
            label: 'About',
            link: '/pages/about',
            parentId: 21
        },
        {
          id: 23,
          label: 'Blog',
          subItems: [
            {
              id: 24,
              label: 'Blog Grid',
              link: '/pages/blog-grid',
              parentId: 23
            },
            {
              id: 25,
              label: 'Single Post',
              link: '/pages/single-blog',
              parentId: 23
            }
          ]
        },
        {
            id: 26,
            label: 'Contacts',
            link: '/pages/contacts',
            parentId: 21
        },
        {
          id: 27,
          label: 'Help Center',
          link: '/pages/help-center',
          parentId: 21
        },
        {
          id: 28,
          label: '404 Not Found',
          link: '/pages/404',
          parentId: 21
        },
      ]
    },
];

