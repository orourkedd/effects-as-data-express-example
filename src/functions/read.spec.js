const { success, failure } = require('effects-as-data')
const { testIt } = require('effects-as-data/test')
const { read } = require('./read')
const { readFile } = require('effects-as-data/lib/actions/node')

const testRead = testIt(read)

describe('read()', () => {
  it('should read file from disk', testRead(() => {
    return [
      [{}, readFile('./user-data.txt', { encoding: 'utf8' })],
      ['data from file', success({ body: 'data from file' })]
    ]
  }))

  it('should return read file error', testRead(() => {
    return [
      [{}, readFile('./user-data.txt', { encoding: 'utf8' })],
      [failure('oops'), failure('oops')]
    ]
  }))
})
