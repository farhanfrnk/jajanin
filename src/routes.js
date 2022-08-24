import React from 'react'

const Discover = React.lazy(() => import('./page/Discover'))
const Cart = React.lazy(() => import('./page/Cart'))
const Home = React.lazy(() => import('./page/Home'))

// const Byusername = React.lazy(() => import('./views/menu/byusername/Byusername'))
// const ByTextSeacrh = React.lazy(() => import('./views/menu/bytextsearch/bytextsearch'))
// const DataVisualization = React.lazy(() => import('./views/pages/datavisualization/datavisualization'))
// const Wadas = React.lazy(() => import('./views/pages/datavisualization/wadas'))

const routes = [
  { path: '/', name: 'Home', element: Home },
  { path: '/discover', name: 'Discover', element: Discover },
  { path: '/cart', name: 'Cart', element: Cart }

]

export default routes
