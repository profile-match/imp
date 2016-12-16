# imp
IMP, or iMatchProfile is the web interface for the profile-match API
This repository contains the angular's base project

## angular 
To run your code, you just have to  : 
* go to the folder "/angular".
* run command : "npm install"
* run command : "npm start"
* open your favorite browser and go to "http://localhost:8080"

## packaging
To build a web archive, you need to :
* run command : "mvn clean package"
* run command : "java -jar /target/imp.war"
* open your favorite browser and go to "http://localhost:8080"

PS : if you want to change the port of your web application, use the following command :
* "java -Dserver.port=9090 -jar /target/imp.war"
