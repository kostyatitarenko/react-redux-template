import Home from '~p/Home';
import About from '~p/About';
import Products from '~p/Products';
import ProductItem from '~p/ProductItem';
import NotFound from '~p/NotFound';

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
    name: 'products',
    url: '/products',
    component: Products,
    exact: true
  },
  {
    name: 'productItem',
    url: '/products/:id',
    component: ProductItem,
    exact: true
  },
  {
    url: '*',
    component: NotFound
  }
];

const routesMap = {};
routes.forEach(route => {
  if (route.hasOwnProperty('name')) {
    routesMap[route.name] = route.url;
  }
});

const urlBuilder = function(name, params) {
  if (!routesMap.hasOwnProperty(name)) {
    return null;
  }
  let url = routesMap[name];

  for (let key in params) {
    url = url.replace(`:${key}`, params[key]);
  }

  return url;
};

export default routes;
export { routesMap, urlBuilder };
