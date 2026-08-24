package core

type ContentfulError struct {
	IsContentfulError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewContentfulError(code string, msg string, ctx *Context) *ContentfulError {
	return &ContentfulError{
		IsContentfulError: true,
		Sdk:              "Contentful",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ContentfulError) Error() string {
	return e.Msg
}
