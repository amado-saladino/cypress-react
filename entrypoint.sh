#! /bin/bash

nohup yarn start &
yarn run test

while true
do
    [ ! -f public/index.html ] && echo "<h2>No Test Results to view</h2>" > public/index.html
    sleep 30s
done
