
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { ContentfulSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ContentfulSDK.test()
    equal(null !== testsdk, true)
  })

})
