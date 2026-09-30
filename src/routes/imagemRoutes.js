const {Router} = require("express");
const ItemController = require("../controllers/CategoriaController");

const router = Router();

router.get("/:url", (req, res)=>ItemController.buscarImagem(req, res));

module.exports = router;