import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ServiceDetailPage = lazy(() => import('../pages/service-detail/page'));
const IndustryDetailPage = lazy(() => import('../pages/industry-detail/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const ImpressumPage = lazy(() => import('../pages/impressum/page'));
const PrivacyPage = lazy(() => import('../pages/privacy/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/services/:slug',
    element: <ServiceDetailPage />,
  },
  {
    path: '/industries/:slug',
    element: <IndustryDetailPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/impressum',
    element: <ImpressumPage />,
  },
  {
    path: '/privacy',
    element: <PrivacyPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
