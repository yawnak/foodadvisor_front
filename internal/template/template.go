package template

import (
	htmltempl "html/template"
)

var (
	Signup      *htmltempl.Template = htmltempl.Must(htmltempl.ParseFiles("web/signup.html"))
	Login       *htmltempl.Template = htmltempl.Must(htmltempl.ParseFiles("web/login.html"))
	Profile     *htmltempl.Template = htmltempl.Must(htmltempl.ParseFiles("web/profile.html"))
	BasicAdvice *htmltempl.Template = htmltempl.Must(htmltempl.ParseFiles("web/basic-advice.html"))
)
