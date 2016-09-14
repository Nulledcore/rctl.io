## rasmusj.se - My personal website written in Go running in App Engine
This is my personal website acting like sort of a project site and CV. It was first written i NancyFX a couple of years ago but has now been completely rewritten in Go instead to run on Google AppEngine. 

[![Build Status](https://travis-ci.org/rctl/rasmusj.se.svg?branch=master)](https://travis-ci.org/rctl/rasmusj.se)
[![Go Report Card](https://goreportcard.com/badge/github.com/rasmusj-se/rasmusj.se)](https://goreportcard.com/report/github.com/rasmusj-se/rasmusj.se)

### The Code
Views are served with Go templating system and are located in the site/ folder. In global/ there are some wrappers for the templates. I have written all of the Go parts myself and the site is entierly UNIT tested to make sure no errors are deployed to App Engine. I'm using Travis CI to build and deploy to App Engine. To get it running yourself you can clone it, install goapp and then do `mv settings_test.json settings_prod.json` and `goapp serve` to serve the site. You may have to add some of your own settings in settings_prod.json to be able to use all of the features in the site. You may use the code in any way you like, though I wish for you to not use any pictures of me or any of my data (emails, name etc).
