import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

const routes = [
  {
    name: 'home',
    url: '/',
    component: Home,
    exact: true
  },
  {
    name: 'about',
    url: '/about',
    component: About,
    exact: true
  },
  {
    url: '*',
    component: NotFound
  }
];

const routesMap = {};
routes.forEach(route => {
  routesMap[route.name] = route.url;
});

export default routes;
export { routesMap };
