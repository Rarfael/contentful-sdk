-- Contentful SDK error

local ContentfulError = {}
ContentfulError.__index = ContentfulError


function ContentfulError.new(code, msg, ctx)
  local self = setmetatable({}, ContentfulError)
  self.is_sdk_error = true
  self.sdk = "Contentful"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ContentfulError:error()
  return self.msg
end


function ContentfulError:__tostring()
  return self.msg
end


return ContentfulError
