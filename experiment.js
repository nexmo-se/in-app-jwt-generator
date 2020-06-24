require('module-alias/register')
const fs = require("fs");
const path = require("path");
const moment = require("moment");
const Nexmo = require("nexmo");

const req = { body: {
  apiKey: "ed9a64af",
  apiSecret: "o2YivoWvTxRxUsVd",
  applicationId: "9987383b-8b2a-46bc-b0a2-844f79fab41d",
  sub: "Frans"
}}

function main(){
  const { apiKey, apiSecret, applicationId, sub } = req.body;
  const privateKey = fs.readFileSync(path.resolve("private.key"));
  const nexmo = new Nexmo({ apiKey, apiSecret, applicationId, privateKey });
  const exp = moment().add(1, "day").unix();
  const aclPaths = {
    "paths": {
      "/*/users/**": {},
      "/*/conversations/**": {},
      "/*/sessions/**": {},
      "/*/devices/**": {},
      "/*/image/**": {},
      "/*/media/**": {},
      "/*/applications/**": {},
      "/*/push/**": {},
      "/*/knocking/**": {}
    }
  }
  const jwt = nexmo.generateJwt({ sub, exp, acl: aclPaths });
  console.log(jwt);
}

main();