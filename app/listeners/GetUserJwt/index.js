const Nexmo = require("nexmo");
const moment = require("moment");
const fs = require("fs");
const path = require("path");

module.exports = function GetUserJwtListener(req, res){
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
  res.status(200).json({ jwt });
}