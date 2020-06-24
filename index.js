require('module-alias/register')

const express = require("express");
const cors = require("cors");

const GetJwtListener = require("@app/listeners/GetJwt");
const GetUserJwtListener = require("@app/listeners/GetUserJwt");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.post("/get-jwt", GetJwtListener);
app.post("/get-user-jwt", GetUserJwtListener);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
