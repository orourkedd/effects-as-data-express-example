const { isFailure, success } = require('effects-as-data')
const { readFile } = require('effects-as-data/lib/actions/node')

function * read () {
  const result = yield readFile('./user-data.txt', { encoding: 'utf8' })
  if (isFailure(result)) return result

  //  return success or failure by convention.  Its not a requirement.
  return success({
    body: result.payload
  })
}

module.exports = {
  read
}
