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
    const route = routes.find(
      (route) => route.path === req.url && route.method === 'GET',
    )
    if (route) {
      route.handler(req, res)
    } else {
      res.statusCode = 404
      res.end('Route not found')
    }
  },
}

export default router
