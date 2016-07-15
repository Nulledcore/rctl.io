package main

import (
	"html/template"
	"net/http"
)

func page(ctx *Context) {
	tmpl, err := template.ParseFiles("global/main.html", "global/footer.html", "global/header.html", "global/scripts.html", "global/css.html", "site/"+ctx.Vars["page"]+".html")
	if err != nil {
		http.Error(ctx.Response, "404 Not Found", 404)
		return
	}
	tmpl.Execute(ctx.Response, buildPageModel())
}
