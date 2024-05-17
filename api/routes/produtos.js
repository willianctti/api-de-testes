const express = require("express");
const router = express.Router();
const produtosControleer = require("../controllers/produtos");

router.get("/", (req, res) => {
  produtosControleer.listarProdutos(req, res);
});

module.exports = router;
