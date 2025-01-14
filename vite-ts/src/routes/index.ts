// Layouts
import AnonymousLayout from '../layouts/AnonymousLayout'
import MainLayout from '../layouts/MainLayout'

// Pages
import Login from '../pages/Login'
import Home from '../pages/Home'
import CreateUser from '../pages/CreateUser'
import ListUsers from '../pages/ListUsers'
import { renderRoutes } from './generate-routes'

// Определение интерфейса RouteElement с обязательным свойством path
export interface RouteElement {
  name: string
  title?: string
  component?: React.ComponentType
  path: string // path обязательно
  isPublic?: boolean
  hasSiderLink?: boolean
  routes?: RouteElement[]
}

// Определение интерфейса MainRoute
export interface MainRoute {
  layout: React.ElementType
  routes: RouteElement[]
}

// Объявление массива маршрутов, соответствующего типу MainRoute[]
export const routes: MainRoute[] = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: 'login',
        title: 'Login page',
        component: Login,
        path: '/login',
        isPublic: true
      }
    ]
  },
  {
    layout: MainLayout,
    routes: [
      {
        name: 'home',
        title: 'Home page',
        component: Home,
        path: '/home'
      },
      {
        name: 'users',
        title: 'Users',
        hasSiderLink: true,
        path: '/users', // Добавляем path для главного маршрута "users"
        routes: [
          {
            name: 'list-users',
            title: 'List of users',
            hasSiderLink: true,
            component: ListUsers,
            path: '/users' // Убедиться, что path существует
          },
          {
            name: 'create-user',
            title: 'Add user',
            hasSiderLink: true,
            component: CreateUser,
            path: '/users/new' // Убедиться, что path существует
          }
        ]
      }
    ]
  }
]

export const Routes = renderRoutes(routes)

// export const routes = [
//   {
//     layout: AnonymousLayout,
//     routes: [
//       {
//         name: 'login',
//         title: 'Login page',
//         component: Login,
//         path: '/login',
//         isPublic: true
//       }
//     ]
//   },
//   {
//     layout: MainLayout,
//     routes: [
//       {
//         name: 'home',
//         title: 'Home page',
//         component: Home,
//         path: '/home'
//       },
//       {
//         name: 'users',
//         title: 'Users',
//         hasSiderLink: true,
//         routes: [
//           {
//             name: 'list-users',
//             title: 'List of users',
//             hasSiderLink: true,
//             component: ListUsers,
//             path: '/users'
//           },
//           {
//             name: 'create-user',
//             title: 'Add user',
//             hasSiderLink: true,
//             component: CreateUser,
//             path: '/users/new'
//           }
//         ]
//       }
//     ]
//   }
// ]
