package server

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func (srv *Server) initRoutes() *chi.Mux {
	router := chi.NewRouter()
	fs := http.FileServer(http.Dir("web/static"))
	router.Handle("/static/*", http.StripPrefix("/static/", fs))

	router.Get("/signup", srv.signup)
	router.Get("/login", srv.login)
	router.Get("/users/{id:[0-9]+}", srv.getUser)
	router.Get("/meals/basic-advice", srv.getBasicAdvice)
	router.Get("/meals", srv.getMeals)
	router.Get("/meals/create-form", srv.createMeal)
	router.Get("/meals/{id:[0-9]+}", srv.getMeal)
	return router
}
