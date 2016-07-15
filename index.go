package main

import (
	"html/template"
	"net/http"
)

func index(ctx *Context){
    if ctx.Settings.TwilioId == "" {
        settingsError(ctx.Response)
        return 
    }
    tmpl, err := template.ParseFiles("global/main.html","global/footer.html","global/header.html","global/scripts.html","global/css.html", "site/startpage.html")
    if err != nil {
        http.Error(ctx.Response, "This website is currently unavailable :(", 502)
        return   
    }
    tmpl.Execute(ctx.Response, buildPageModel())
}
