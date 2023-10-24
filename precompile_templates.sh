#/bin/bash

cd www/
handlebars templates/ > js/precompiled_templates.js
handlebars -p partials_templates/ > js/precompiled_partials.js
