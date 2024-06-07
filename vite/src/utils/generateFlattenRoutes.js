import flattenDeep from 'lodash/flattenDeep'

// const flattenDeep = (arr) => {
//   return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
// }

const generateFlattenRoutes = (routes) => {
  if (!routes) return []
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlattenRoutes(subRoutes || [])
    ])
  )
}

export default generateFlattenRoutes
