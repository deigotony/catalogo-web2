const {Router} = require("express");
const CategoriaController = require("../controllers/CategoriaController");

const router = Router();

router.post("/", (req,res) => CategoriaController.cadastrar(req,res) );
router.get("/", (req, res)=>CategoriaController.listar(req, res));
router.get("/:id", (req, res)=> CategoriaController.buscarPorId(req, res));
router.delete("/:id", (req, res)=>CategoriaController.excluir(req, res));
router.put("/:id", (req, res)=> CategoriaController.atualizar(req, res));

module.exports = router;