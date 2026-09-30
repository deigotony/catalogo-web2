const categoriaService = require('../services/CategoriaService');
class CategoriaController {
    async listar(req, res){
        try{
            const categorias = await categoriaService.listarTodas(req.body);
            return res.status(200).json(categorias);
        }catch(error){
            return res.status(500).json({erro: error.message});
        }
    }

    async cadastrar(req, res){
        try{
            const {nome} = req.body;
            const novaCategoria = await categoriaService.criarCategoria(nome);
            return res.status(201).json({sucesso: 'categoria cadastrada com sucesso', categoria: novaCategoria});
        }catch(error){
            return res.status(400).json({erro: error.message});
        }
    }
}

module.exports = new CategoriaController();