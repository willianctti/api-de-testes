const express = require("express");
const app = express();
const port = 8000;
const produtosRoutes = require("./api/routes/produtos");

app.listen(8000);
app.use("/produtos", produtosRoutes);
