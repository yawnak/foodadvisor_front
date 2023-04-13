package server

import (
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
	return http.ListenAndServe(":"+port, srv.router)
}
