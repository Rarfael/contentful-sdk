
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ContentfulSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ContentfulSDK.test()
    equal(null !== testsdk, true)
  })

})
