const { run, isFailure } = require('effects-as-data')
const { pick } = require('ramda')

function route (handlers, fn) {
  return function (req, res, next) {
    const reqAsData = pick(['body', 'headers', 'params', 'method', 'url', 'path'], req)
    run(handlers, fn, reqAsData, { onFailure: console.error })
    .then((r) => {
      if (isFailure(r)) {
        res.status(r.status || 500)
        res.send(r.error)
      } else {
        res.status(r.status || 200)
        res.send(r.payload.body)
      }
    })
    .catch((e) => {
      res.status(500)
      res.send(e)
    })
  }
}

module.exports = (handlers) => {
  return (fn) => {
    return route(handlers, fn)
  }
}
