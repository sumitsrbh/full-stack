const routes = []

const router = {
  get: (path, handler) => {
    routes.push({
      path,
      handler,
      method: 'GET',
    })
  },

  handle: (req, res) => {
    let route = null
    req.params = {}
    const urlArry = req.url.split('/').filter(Boolean)
    route = routes.find((r) => {
      let equal = true
      const pathArry = r.path.split('/').filter(Boolean)
      if (pathArry.length === urlArry.length && equal) {
        for (let i = 0; i < urlArry.length; i++) {
          if (urlArry[i] == pathArry[i]) {
            equal = true
          } else if (pathArry[i].startsWith(':')) {
            let prop = pathArry[i].replace(':', '')
            req.params[prop] = urlArry[i]
            console.log('params', req.params)
          } else {
            equal = false
          }
        }
      } else {
        equal = false
      }
      return equal ? r : null
    })
    if (route) {
      console.log('route:', route, 'req.params:', req.params)
      route.handler(req, res)
    } else {
      res.statusCode = 404
      res.end('Route not found')
    }
  },
}

export default router
