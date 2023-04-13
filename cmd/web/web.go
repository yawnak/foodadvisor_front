package main

import (
	"log"

	"github.com/yawnak/foodadvisor_front/internal/server"
)

func main() {
	srv := server.NewServer()
	log.Fatalln(srv.ListenAndServe("3000"))
}
