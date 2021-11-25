FROM cypress/included:8.3.1
WORKDIR /e2e
RUN apt install -y rsync
EXPOSE 3000
COPY package.json .
COPY entrypoint.sh .
RUN chmod u+x entrypoint.sh
RUN yarn install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY src /e2e/src
COPY public /e2e/public
ENTRYPOINT [ "./entrypoint.sh" ]
