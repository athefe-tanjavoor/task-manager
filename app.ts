// "dev": "nodemon --watch src/* --exec ts-node ./src/app.ts",

import express from "express";
const app = express();

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
