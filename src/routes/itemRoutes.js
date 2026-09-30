const {Router} = require("express");
const ItemController = require("../controllers/ItemController");
const {estaAutenticado} = require("../middleware/authMiddleware");

const router = Router();

router.post("/", estaAutenticado,(req,res) => ItemController.cadastrar(req,res) );
router.get("/", (req, res)=> ItemController.listar(req, res));
router.get("/:id", (req, res)=> ItemController.buscarPorId(req, res));
router.put("/:id", estaAutenticado,(req, res) => ItemController.atualizar(req, res));
router.delete("/:id", estaAutenticado,(req, res) => ItemController.excluir(req, res));

module.exports = router;