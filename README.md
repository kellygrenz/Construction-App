1) Make sure mongo DB is runnining
`sudo mongod`

2) Update the line in `server/server.js` to use your DB of choice
`mongoose.connect('mongodb://localhost/__YOUR_DB__')`

3) Install Client packages
`npm run install:client`

4) Install Server packages
`npm run install:server`

__Tip__
You can run both the previous steps in one command:
`npm run install:client && npm run install:server`

5) Start Client
`npm run start:client`

6) Start Server
`npm run start:server`

Browser is loaded at `localhost:3000` and server api is located at `localhost:3001`
