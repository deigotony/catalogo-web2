const {Router} = require("express");
const CategoriaController = require("../controllers/CategoriaController");
const estaAutenticado = require("../middleware/authMiddleware");

const router = Router();

router.post("/", estaAutenticado,(req,res) => CategoriaController.cadastrar(req,res) );
router.get("/", (req, res)=>CategoriaController.listar(req, res));
router.get("/:id", (req, res)=> CategoriaController.buscarPorId(req, res));
router.delete("/:id", estaAutenticado,(req, res)=>CategoriaController.excluir(req, res));
router.put("/:id", estaAutenticado,(req, res)=> CategoriaController.atualizar(req, res));

module.exports = router;