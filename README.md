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
* run command : "java -jar /target/imp.war"
* open your favorite browser and go to "http://localhost:4200"

PS : if you want to change the port of your web application, use the following command :
* "java -Dserver.port=9090 -jar /target/imp.war"
