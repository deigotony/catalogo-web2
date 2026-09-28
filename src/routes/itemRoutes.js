const {Router} = require("express");
const ItemController = require("../controllers/ItemController");

const router = Router();

router.post("/", (req,res) => ItemController.criar(req,res) );

module.exports = router;