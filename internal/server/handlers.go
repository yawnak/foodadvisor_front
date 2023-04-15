package server

import (
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
	"github.com/yawnak/foodadvisor_front/internal/template"
)

func (srv *Server) signup(w http.ResponseWriter, r *http.Request) {
	template.Signup.Execute(w, nil)
}

func (srv *Server) login(w http.ResponseWriter, r *http.Request) {
	template.Login.Execute(w, nil)
}

func (srv *Server) getUser(w http.ResponseWriter, r *http.Request) {
	temp, err := strconv.Atoi(chi.URLParamFromCtx(r.Context(), "id"))
	if err != nil {
		log.Println("err in getUser", err)
		chi.NewMux().NotFoundHandler()(w, r)
		return
	}
	fmt.Println("uid: ", temp)
	uid := int32(temp)

	type data struct {
		UserId int32
	}
	template.Profile.Execute(w, data{
		UserId: uid,
	})
}

func (srv *Server) getBasicAdvice(w http.ResponseWriter, r *http.Request) {
	template.BasicAdvice.Execute(w, nil)
}

func (srv *Server) getMeals(w http.ResponseWriter, r *http.Request) {
	template.Meals.Execute(w, nil)
}

func (srv *Server) createMeal(w http.ResponseWriter, r *http.Request) {
	template.CreateMeal.Execute(w, nil)
}

func (srv *Server) getMeal(w http.ResponseWriter, r *http.Request) {
	template.Meal.Execute(w, nil)
}
