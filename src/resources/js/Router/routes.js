const routes = [
  {
    path: '',
    component: () => import(/* webpackChunkName: "home" */'../Pages/Home.vue'),
    name: 'home',
    meta: {
      requiresAuth: true,
      title: 'OpenPOS'
    }
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../Pages/Login.vue'),
    name: 'login',
    meta: {
      requiresAuth: false,
      title: 'Login'
    }
  },
  {
    path: '/welcome',
    component: () => import(/* webpackChunkName: "welcome" */ '../Pages/Welcome.vue'),
    name: 'welcome',
    meta: {
      requiresAuth: false,
      title: 'Welcome'
    }
  },
  {
    path: '/settings',
    component: () => import(/* webpackChunkName: "settings" */ '../Components/Settings.vue'),
    name: 'settings',
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../Pages/Dashboard.vue'),
        name: 'dashboard',
        meta: {
          title: 'Dashboard',
          requiresAuth: true,
        }
      },
      {
        path: '/employees',
        name: 'employee',
        component: () => import(/* webpackChunkName: "employees" */ '../Pages/Employee.vue'),
        meta: {
          title: 'Employees',
          requiresAuth: true,
        }
      },
      {
        path: '/configuration',
        name: 'configuration',
        component: () => import(/* webpackChunkName: "configuration" */ '../Pages/Configuration.vue'),
        meta: {
          title: 'Configuration',
          requiresAuth: true,
        }
      },
      {
        path: '/providers',
        name: 'provider',
        component: () => import(/* webpackChunkName: "providers" */ '../Pages/Provider.vue'),
        meta: {
          title: 'Providers',
          requiresAuth: true,
        }
      },
      {
        path: '/stock',
        name: 'stock',
        component: () => import(/* webpackChunkName: "stock" */ '../Pages/Stock.vue'),
        meta: {
          title: 'Stock',
          requiresAuth: true,
        }
      },
      {
        path: '/customers',
        name: 'customer',
        component: () => import(/* webpackChunkName: "customers" */ '../Pages/Customer.vue'),
        meta: {
          title: 'Customers',
          requiresAuth: true,
        }
      }
    ]
  }
]

export default routes;