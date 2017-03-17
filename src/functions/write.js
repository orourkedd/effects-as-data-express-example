const { isFailure, success } = require('effects-as-data')
const { writeFile } = require('effects-as-data/lib/actions/node')

function * write ({ body }) {
  const result = yield writeFile('./user-data.txt', JSON.stringify(body), { encoding: 'utf8' })
  if (isFailure(result)) return result

  //  return success or failure by convention.  Its not a requirement.
  return success({
    body: {
      message: 'Your message was saved!'
    }
  })
}

module.exports = {
  write
}
