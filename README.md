# In-app JWT Generator
JWT generator for In-app. It will generate 2 type of JWT
1. Application JWT (You need to provide application, apiKey, and apiSecret)
2. User JWT

There are 3 components for this
- Website: [https://github.com/nexmo-se/in-app-web](https://github.com/nexmo-se/in-app-web)
- JWT Generator: [https://github.com/nexmo-se/in-app-jwt-generator](https://github.com/nexmo-se/in-app-jwt-generator)
- API Server: [https://github.com/nexmo-se/in-app-web-server](https://github.com/nexmo-se/in-app-web-server)

## Requirements
You need to do this before running the server
1. Retrieve application private key from Vonage API Dashboard
2. Place it in root folder and name it `private.key`

## Deployment
Heroku deployment is available

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/nexmo-se/in-app-jwt-generator)

Just a single script to run it
1. Run using `node index.js` or `npm run start`

