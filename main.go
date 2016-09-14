package main

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"golang.org/x/net/context"
	"google.golang.org/appengine"
	"io/ioutil"
	"net/http"
)

func buildPageModel() interface{} {
	return struct {
		Name  string
		Email string
		Age   int
	}{
		Name: "Rasmus Jönsson",
		Email: "rasmus@rasmusj.se",
		Age: 21,
	}
}

type Settings struct {
	TwilioId  string
	TwilioKey string
}

type Context struct {
	AE       context.Context
	Settings *Settings
	Response http.ResponseWriter
	Request  *http.Request
	Vars     map[string]string
}

func main()  { }

func init() {

	var settings Settings
	file, err := ioutil.ReadFile("./settings_prod.json")
	if err == nil {
		json.Unmarshal(file, &settings)
	}

	r := mux.NewRouter()
	r.HandleFunc("/", RequestWrapper(index, &settings))
	r.HandleFunc("/{page}", RequestWrapper(page, &settings))
	http.Handle("/", r)
}

func settingsError(w http.ResponseWriter) {
	http.Error(w, "Could not read site configuration file!", 502)
}

func RequestWrapper(endpoint func(ctx *Context), settings *Settings) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		c := appengine.NewContext(r)
		endpoint(&Context{
			AE:       c,
			Settings: settings,
			Request:  r,
			Response: w,
			Vars:     mux.Vars(r),
		})
	}
}
