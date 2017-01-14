# imp
IMP, or iMatchProfile is the web interface for the profile-match API  
This repository contains the angular's base project

## angular 
To run your code, you just have to  : 
* run command : "npm install"
* run command : "npm start" or "ng serve"
* open your favorite browser and go to "http://localhost:4200"

## packaging
To build a web archive, you need to :
* run command : "ng build"

## problems with CORS
For security reasons, browsers don't allow you to send requests to an other domain than the one from which you received your web page.  
This means that if your node server is running on port 4200 and your wildfly on port 8080 on the same machine, you won't be able to send request to each other.
In order to be able to make both projects communicate together, you'll need to disable CORS in your browser.
