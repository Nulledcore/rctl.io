package main

import (
	"encoding/json"
	"io/ioutil"
	"testing"
)

func TestProdConfigFile(t *testing.T) {
	file, err := ioutil.ReadFile("./settings_prod.json")
	if err != nil {
		t.Fail()
	}
	var settings Settings
	err = json.Unmarshal(file, &settings)
	if err != nil {
		t.Errorf("Production settings file did not read as proper json")
	}
	if settings.TwilioId == "" {
		t.Errorf("twilioId in settings is %s", settings.TwilioId)
	}
}
