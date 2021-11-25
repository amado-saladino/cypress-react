#! /bin/bash

[ -f mochawesome.json ] && rm mochawesome.json
[ -d cypress/results ] && rm -rf cypress/results