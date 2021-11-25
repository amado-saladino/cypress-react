#! /bin/bash

npx mochawesome-merge "cypress/results/*.json" > mochawesome.json
npx marge mochawesome.json
rsync -av mochawesome-report/* public --exclude mochawesome.html
cp mochawesome-report/mochawesome.html public/index.html