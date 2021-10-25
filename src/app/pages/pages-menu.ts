import {MenuItem} from "../@theme/components/menu/menu.service";

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Menu',
    icon: 'menu',
    expanded: true,
    children: [
      {
        title: 'Dashboard',
        icon: 'dashboard',
        link: '/',
      },
    ],
  },
  {
    title: 'Layout',
    icon: 'view_compact',
    expanded: false,
    children: [
      {
        title: 'Stepper',
        icon: 'pin',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        icon: 'list',
        link: '/#',
      },
      {
        title: 'Infinite List',
        icon: 'playlist_add_circle',
        link: '/#',
      },
      {
        title: 'Accordion',
        icon: 'expand',
        link: '/#',
      },
      {
        title: 'Tabs',
        icon: 'tab',
        link: '/#',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'format_list_bulleted',
    expanded: false,
    children: [
      {
        title: 'Form Inputs',
        icon: '',
        link: '/#',
      },
      {
        title: 'Form Layouts',
        icon: '',
        link: '/#',
      },
      {
        title: 'Buttons',
        icon: '',
        link: '/#',
      },
      {
        title: 'Datepicker',
        icon: '',
        link: '/#',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: '',
    expanded: false,
    children: [
      {
        title: 'Grid',
        icon: '',
        link: '/#',
      },
      {
        title: 'Icons',
        icon: '',
        link: '/#',
      },
      {
        title: 'Typography',
        icon: '',
        link: '/#',
      },
      {
        title: 'Animated Searches',
        icon: '',
        link: '/#',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: '',
    expanded: false,
    children: [
      {
        title: 'Dialog',
        icon: '',
        link: '/#',
      },
      {
        title: 'Window',
        icon: '',
        link: '/#',
      },
      {
        title: 'Popover',
        icon: '',
        link: '/#',
      },
      {
        title: 'Toaster',
        icon: '',
        link: '/#',
      },
      {
        title: 'Tooltip',
        icon: '',
        link: '/#',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: '',
    expanded: false,
    children: [
      {
        title: 'Calendar',
        icon: '',
        link: '/#',
      },
      {
        title: 'Progress Bar',
        icon: '',
        link: '/#',
      },
      {
        title: 'Spinner',
        icon: '',
        link: '/#',
      },
      {
        title: 'Alert',
        icon: '',
        link: '/#',
      },
      {
        title: 'Calendar Kit',
        icon: '',
        link: '/#',
      },
      {
        title: 'Chat',
        icon: '',
        link: '/#',
      },
    ],
  },
  {
    title: 'Maps',
    icon: '',
    expanded: false,
    children: [
      {
        title: 'Google Maps',
        icon: '',
        link: '/#',
      },
      {
        title: 'Leaflet Maps',
        icon: '',
        link: '/#',
      },
      {
        title: 'Bubble Maps',
        icon: '',
        link: '/#',
      },
      {
        title: 'Search Maps',
        icon: '',
        link: '/#',
      },
    ],
  },
  {
    title: 'Charts',
    icon: '',
    expanded: false,
    children: [
      {
        title: 'Echarts',
        icon: '',
        link: '/#',
      },
      {
        title: 'Charts.js',
        icon: '',
        link: '/#',
      },
      {
        title: 'D3',
        icon: '',
        link: '/#',
      },
    ],
  },
  {
    title: 'Editors',
    icon: '',
    expanded: false,
    children: [
      {
        title: 'TinyMCE',
        icon: '',
        link: '/#',
      },
      {
        title: 'CKEditor',
        icon: '',
        link: '/#',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: '',
    expanded: false,
    children: [
      {
        title: 'Smart Table',
        icon: '',
        link: '/#',
      },
      {
        title: 'Tree Grid',
        icon: '',
        link: '/#',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: '',
    expanded: false,
    children: [
      {
        title: '404',
        icon: '',
        link: '/#',
      },
    ],
  },
  {
    title: 'Auth',
    icon: '',
    expanded: false,
    children: [
      {
        title: 'Login',
        icon: '',
        link: '/#',
      },
      {
        title: 'Register',
        icon: '',
        link: '/#',
      },
      {
        title: 'Request Password',
        icon: '',
        link: '/#',
      },
      {
        title: 'Reset Password',
        icon: '',
        link: '/#',
      },
    ],
  },
];
