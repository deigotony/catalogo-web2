const {Router} = require("express");
const UsuarioController = require("../controllers/UsuarioController");

const router = Router();

router.post("/", (req,res) => UsuarioController.cadastrar(req,res) );
router.get("/", (req, res)=> UsuarioController.listarTodos(req, res));
router.get("/:id", (req, res)=> UsuarioController.buscarPorId(req, res));
router.put("/:id", (req, res)=> UsuarioController.alterar(req, res));
router.delete("/:id", (req, res)=> UsuarioController.excluir(req, res));

module.exports = router;