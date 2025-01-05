#!/usr/bin/bash

handlebars templates -f templates/templates.js -c handlebars/runtime
npx webpack --config webpack.config.js
npm test
cordova build browser