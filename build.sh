#!/bin/bash
goapp get -u
goapp test
if [[ $? != 0 ]] 
then
    echo "ERROR: Tests failed"
    exit 2
fi
appcfg.py --oauth2_access_token=$GAEAUTH --oauth2_refresh_token=$GAEAUTHREFRESH update app.yaml
echo "Build was succesful and latest version was deployed to App Engine"
exit 0