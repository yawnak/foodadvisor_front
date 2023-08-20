package server

import (
	"io/fs"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/yawnak/foodadvisor_front/internal/template"
)

func (srv *Server) initRoutes() *chi.Mux {
	router := chi.NewRouter()
	subdir, err := fs.Sub(template.Static, "web/static")
	if err != nil {
		log.Fatalln("error making subdirectory:", err)
	}
	fs := http.FileServer(http.FS(subdir))
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
