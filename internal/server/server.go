package server

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
)

type Server struct {
	router *chi.Mux
}

func NewServer() *Server {
	srv := Server{}
	router := chi.NewRouter()
	router.Mount("/", srv.initRoutes())
	srv.router = router
	return &srv
}

func (srv *Server) ListenAndServe(port string) error {
	log.Printf("server starting at port :%s...", port)
	return http.ListenAndServe(":"+port, srv.router)
}
