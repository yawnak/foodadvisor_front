package template

import (
	"embed"
	htmltempl "html/template"
)

var (
	//go:embed web/*
	content embed.FS

	//go:embed web/static/*
	Static embed.FS
)

var (
	Signup      *htmltempl.Template = htmltempl.Must(htmltempl.ParseFS(content, "web/signup.html"))
	Login       *htmltempl.Template = htmltempl.Must(htmltempl.ParseFS(content, "web/login.html"))
	Profile     *htmltempl.Template = htmltempl.Must(htmltempl.ParseFS(content, "web/profile.html"))
	BasicAdvice *htmltempl.Template = htmltempl.Must(htmltempl.ParseFS(content, "web/basic-advice.html"))
	Meals       *htmltempl.Template = htmltempl.Must(htmltempl.ParseFS(content, "web/meals.html"))
	CreateMeal  *htmltempl.Template = htmltempl.Must(htmltempl.ParseFS(content, "web/createMeal.html"))
	Meal        *htmltempl.Template = htmltempl.Must(htmltempl.ParseFS(content, "web/meal.html"))
)
