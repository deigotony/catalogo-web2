const {Router} = require("express");
const CategoriaController = require("../controllers/CategoriaController");

const router = Router();

router.post("/", (req,res) => CategoriaController.criar(req,res) );

module.exports = router;