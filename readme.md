# Overview

Running Cypress tests in a container with the ability to view the test report with automatic update on regression test.

# Run on host

This repo is basically made to run the test in a container, the base image of `amadosaladino/cypress-react:v1` comes with cypress version 8.3.1, cypress package is not then included in `package.json`

To install cypress on your system if not installed:

```shell
yarn add cypress
```

# Standalone container

```shell
docker run -d --name cypress-react -p 3000:3000 -v $PWD:/e2e -v /e2e/node_modules amadosaladino/cypress-react:v1
```

> **Note** It is assumed this command will run from the cypress root project

## Regression test

```shell
docker exec -d cypress-react yarn run test
```

# docker-compose

It could be used along side with ghcr.io/linuxserver/photoshow photo gallery image

```yaml
version: '3'
services:
  cypress:
    image: cypress-react:v1
    ports: 
      - "3000:3000"
    volumes:
      - /e2e/node_modules
      - .:/e2e
  gallery:
    image: ghcr.io/linuxserver/photoshow
    depends_on:
    - cypress
    ports:
      - "81:80"
    volumes:
      - ./cypress/screenshots:/Pictures:ro
```

# Test report

The test report will be available at `http://localhost:3000` or `https://YOUR-IP:3000`

## Test screenshots

Screenshots taken during test run are available at `http://localhost:81` or `http://YOUR-IP:81`

## Regression test

```shell
docker-compose exec -d cypress yarn run test
```