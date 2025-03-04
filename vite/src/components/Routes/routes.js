import AnonymousLayout from '../layouts/AnonymousLayout'
import MainLayout from '../layouts/MainLayout'

import Login from '../../pages/Login'
import Home from '../../pages/Home'
import CreateUser from '../../pages/CreateUser'
import ListUsers from '../../pages/ListUsers'
import { renderRoutes } from '../../components/Routes/renderRoutes'

export const routes = [
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
            path: '/users'
          },
          {
            name: 'create-user',
            title: 'Add user',
            hasSiderLink: true,
            component: CreateUser,
            path: '/users/new'
          }
        ]
      }
    ]
  }
]

export const Routes = renderRoutes(routes)
