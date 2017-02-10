#!/bin/bash
npm install
cp fix/custom.min.css node_modules/gentelella/build/css/custom.min.css
ng build
