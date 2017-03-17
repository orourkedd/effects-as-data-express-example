const { success, failure } = require('effects-as-data')
const { testIt } = require('effects-as-data/test')
const { write } = require('./write')
const { writeFile } = require('effects-as-data/lib/actions/node')

const testWrite = testIt(write)

describe('write()', () => {
  it('should write data to disk', testWrite(() => {
    return [
      [{ body: { message: 'hi' } }, writeFile('./user-data.txt', JSON.stringify({ message: 'hi' }), { encoding: 'utf8' })],
      [null, success({ body: { message: 'Your message was saved!' } })]
    ]
  }))

  it('should return write file error', testWrite(() => {
    return [
      [{ body: { message: 'hi' } }, writeFile('./user-data.txt', JSON.stringify({ message: 'hi' }), { encoding: 'utf8' })],
      [failure('oops'), failure('oops')]
    ]
  }))
})
