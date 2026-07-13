export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/about', label: 'About', pageFile: 'AboutPage' },
  { path: '/about-us', label: 'About Us', pageFile: 'AboutUsPage' },
];
