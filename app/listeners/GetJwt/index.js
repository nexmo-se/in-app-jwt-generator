const Nexmo = require("nexmo");
const moment = require("moment");
const fs = require("fs");
const path = require("path");

module.exports = function GetJwtListener(req, res){
  const { apiKey, apiSecret, applicationId, claims } = req.body;
  const privateKey = fs.readFileSync(path.resolve("private.key"));
  const nexmo = new Nexmo({
    apiKey, apiSecret, applicationId, privateKey
  })
  
  const exp = moment().add(1, "day").unix();
  const jwt = nexmo.generateJwt({ exp });
  res.status(200).json({ jwt })
}