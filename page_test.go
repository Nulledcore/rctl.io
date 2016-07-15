package main

import (
    "testing"
    "strings"
    "io/ioutil"
    "encoding/json"
	"google.golang.org/appengine/aetest"
	"net/http/httptest"
)

func TestPage(t *testing.T) {
    inst, err := aetest.NewInstance(nil)
     if err != nil {
            t.Fatalf("Failed to create instance: %v", err)
    }
    defer inst.Close()
    req, err := inst.NewRequest("GET", "/test", nil)
    if err != nil {
        t.Fatalf("Failed to create request: %v", err)
    }
    w := httptest.NewRecorder()
    var vars map[string]string
    vars = make(map[string]string)
    vars["page"] = "test"
    var settings Settings
    file, err := ioutil.ReadFile("./settings_test.json")
    if err == nil {
        json.Unmarshal(file, &settings)
    }
    ctx, _, _ := aetest.NewContext()
    page(&Context{
        AE: ctx,
        Request: req,
        Response: w,
        Settings: &settings,
        Vars: vars,
    })
    if w.Code != 200 {
        t.Errorf("Index did not return 200. Returned type was %d", w.Code)
    }
    body, err := ioutil.ReadAll(w.Body)
    if err != nil || !strings.Contains(string(body), "!TEST!") {
        t.Errorf("Request to test page failed")
    }
    
}