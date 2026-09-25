class Router {
  constructor() {
    this.routes = []
  }
  get(path, handler) {
    this.register('GET', path, handler)
  }

  post(path, handler) {
    this.register('POST', path, handler)
  }

  put(path, handler) {
    this.register('PUT', path, handler)
  }

  patch(path, handler) {
    this.register('PATCH', path, handler)
  }

  delete(path, handler) {
    this.register('DELETE', path, handler)
  }

  register(method, path, hanlder) {
    this.routes.push({
      method,
      path,
      hanlder,
    })
  }
  matchRoute(req, res) {
    const urlArry = req.url.split('/').filter(Boolean)
    req['params'] = {}
    let route = this.routes.find((r) => {
      //* pathArry= /users/:userId/tasks/:taskId
      // * url = /users/123/tasks/234
      let equal = false
      let params = {}
      let pathArry = r.path.split('/').filter(Boolean)
      if (r.method !== req.method) {
        return null
      }
      if (pathArry.length !== urlArry.length) {
        return null
      }
      for (let i = 0; i < pathArry.length; i++) {
        if (pathArry[i] == urlArry[i]) {
          continue
        } else if (pathArry[i].startsWith(':')) {
          const paramName = pathArry[i].slice(1)
          params[paramName] = urlArry[i]
          continue
        }
        return null
      }
      req.params = params
      return r
    })
    if (route) {
      route.handler(req, res)
    } else {
      res.writeHead(404)
      res.end('Not found')
    }
  }
}
const router = new Router()
export { router }
export default router
