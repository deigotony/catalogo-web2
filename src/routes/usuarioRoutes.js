const {Router} = require("express");
const UsuarioController = require("../controllers/UsuarioController");

const router = Router();

router.post("/", (req,res) => UsuarioController.criar(req,res) );

module.exports = router;