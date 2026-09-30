const {Router} = require("express");
const ItemController = require("../controllers/ItemController");

const router = Router();

router.post("/", (req,res) => ItemController.cadastrar(req,res) );
router.get("/", (req, res)=> ItemController.listar(req, res));
router.get("/:id", (req, res)=> ItemController.buscarPorId(req, res));
router.put("/:id", (req, res) => ItemController.atualizar(req, res));
router.delete("/:id", (req, res) => ItemController.excluir(req, res));

module.exports = router;