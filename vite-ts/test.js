// src/
// │
// ├── components/
// │   ├── Layouts/
// │   │   ├── AnonymousLayout.tsx
// │   │   └── MainLayout.tsx
// │   └── Routes/
// │       ├── ProtectedRoute.tsx
// │       └── renderRoutes.tsx
// │
// ├── utils/
// │   └── generateFlattenRoutes.ts
// │
// ├── pages/
// │   ├── Login.tsx
// │   ├── Home.tsx
// │   ├── ListUsers.tsx
// │   └── CreateUser.tsx
// │
// ├── App.tsx
// └── index.tsx

// import React from 'react'
// import { Navigate, useLocation } from 'react-router-dom'
// import { ProtectedRouteProps } from '../../types'

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
//   isPublic,
//   isAuthorized,
//   redirectTo,
//   children
// }) => {
//   const location = useLocation()
//   const from = location.pathname // текущий путь, который пользователь пытался посетить

//   if (!isPublic && !isAuthorized) {
//     return <Navigate to="/login" state={{ from }} />
//   }
//   if (isPublic && isAuthorized) {
//     const redirectPath = location.state?.from || redirectTo
//     return <Navigate to={redirectPath} />
//   }
//   return <>{children}</>
// }

// export default ProtectedRoute

// import React from 'react';
// import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom';

// interface RouteElement {
//   name: string;
//   title?: string;
//   component?: React.ComponentType;
//   path: string;
//   isPublic?: boolean;
//   hasSiderLink?: boolean;
//   routes?: RouteElement[];
// }

// interface MainRoute {
//   layout: React.ElementType;
//   routes: RouteElement[];
// }

// const flattenDeep = (arr: any[]): any[] => {
//   return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
// }

// const generateFlattenRoutes = (routes: RouteElement[]): RouteElement[] => {
//   if (!routes) return [];
//   return flattenDeep(routes.map(({ routes: subRoutes, ...rest }) => [rest, generateFlattenRoutes(subRoutes || [])])) as RouteElement[];
// }

// interface ProtectedRouteProps {
//   isPublic: boolean;
//   isAuthorized: boolean;
//   redirectTo: string;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isPublic, isAuthorized, redirectTo, children }) => {
//   if (!isPublic && !isAuthorized) {
//     return <Navigate to="/login" />;
//   }
//   if (isPublic && isAuthorized) {
//     return <Navigate to={redirectTo} />;
//   }
//   return <>{children}</>;
// };

// interface RoutesProps {
//   isAuthorized: boolean;
// }

// export const renderRoutes = (mainRoutes: MainRoute[]) => {
//   const Routes: React.FC<RoutesProps> = ({ isAuthorized }) => {
//     const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
//       const subRoutes = generateFlattenRoutes(routes);

//       return (
//         <Route key={index} element={<Layout />}>
//           {subRoutes.map(({ component: Component, path, name, isPublic }) => (
//             Component && path && (
//               <Route
//                 key={name}
//                 element={
//                   <ProtectedRoute
//                     isPublic={!!isPublic}
//                     isAuthorized={isAuthorized}
//                     redirectTo="/home"
//                   >
//                     <Component />
//                   </ProtectedRoute>
//                 }
//                 path={path}
//               />
//             )
//           ))}
//         </Route>
//       );

//     });
//     return <ReactRoutes>{layouts}</ReactRoutes>;
//   };
//   return Routes;
// };
