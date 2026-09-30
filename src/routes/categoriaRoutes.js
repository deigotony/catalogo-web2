const {Router} = require("express");
const CategoriaController = require("../controllers/CategoriaController");

const router = Router();

router.post("/", (req,res) => CategoriaController.cadastrar(req,res) );
router.get("/", (req, res)=>CategoriaController.listar(req, res));

module.exports = router;