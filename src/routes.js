import React from 'react'

const Cart = React.lazy(() => import('./page/Cart'))
const Home = React.lazy(() => import('./page/Home'))
const Wishlist = React.lazy(() => import('./page/Wishlist'))
const Profil = React.lazy(() => import('./page/Profil'))
const Category = React.lazy(() => import('./page/Category'))

// const Byusername = React.lazy(() => import('./views/menu/byusername/Byusername'))
// const ByTextSeacrh = React.lazy(() => import('./views/menu/bytextsearch/bytextsearch'))
// const DataVisualization = React.lazy(() => import('./views/pages/datavisualization/datavisualization'))
// const Wadas = React.lazy(() => import('./views/pages/datavisualization/wadas'))

const routes = [
  { path: '/home', name: 'Home', element: Home },
  { path: '/cart', name: 'Cart', element: Cart },
  { path: '/profil', name: 'Profil', element: Profil },
  { path: '/wishlist', name: 'Wishlist', element: Wishlist },
  { path: '/category/gadget', name: 'Category', element: Category }

]

export default routes
