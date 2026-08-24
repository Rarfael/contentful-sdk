-- Contentful SDK exists test

local sdk = require("contentful_sdk")

describe("ContentfulSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
