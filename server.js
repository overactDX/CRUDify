const express = require("express");
const { readdirSync } = require("fs");

// const productRouter = require("./Routes/product");
// const authRouter = require("./Routes/auth");

const app = express();

// /require router
// app.use("/api", productRouter);
// app.use("/api", authRouter);

//auto Route
readdirSync("./Routes").map((e, index) =>
  app.use("/api", require("./Routes/" + e))
);

app.listen(5000, () => {
  console.log("Server is running port 5000");
});
