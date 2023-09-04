// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: icon('user'),
  // },
  // {
  //   title: 'transactions',
  //   path: '/dashboard/transactions',
  //   icon: icon('transactions'),
  // },
  // {
  //   title: 'notification',
  //   path: '/dashboard/notification',
  //   icon: icon('notification'),
  // },
  // {
  //   title: 'Video Gallery',
  //   path: '/dashboard/products',
  //   icon: icon('video'),
  // },
  {
    title: 'Add Marquee',
    path: '/dashboard/addmarquee',
    icon: icon('add-marquee'),
  },
  {
    title: 'All Maquees',
    path: '/dashboard/allmarquee',
    icon: icon('all-marquee'),
  },
  {
    title: 'Add Event',
    path: '/dashboard/addevent',
    icon: icon('add-event'),
  },
  {
    title: 'View Event',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
];

export default navConfig;
