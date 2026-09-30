const categoriaService = require('../services/CategoriaService');
class CategoriaController {
    async cadastrar(req, res){
        try{
            const {nome} = req.body;
            const novaCategoria = await categoriaService.criarCategoria(nome);
            return res.status(201).json({sucesso: 'categoria cadastrada com sucesso', categoria: novaCategoria});
        }catch(error){
            return res.status(400).json({erro: error.message});
        }
    }
    async listar(req, res){
        try{
            const categorias = await categoriaService.listarTodas(req.body);
            return res.status(200).json(categorias);
        }catch(error){
            return res.status(500).json({erro: error.message});
        }
    }
    async buscarPorId(req, res){
        try{
            const {id}=req.params;
            const categoria=await categoriaService.buscarPorId(id);
            return res.status(200).json(categoria);
        }catch (error){
            return res.status(404).json(error);
        }
    }
    async atualizar(req, res){
        try{
            const {id}=req.params;
            const categoria=await categoriaService.atualizar(id, req.body);
            return res.status(200).json({sucesso: "categoria atualizada", categoria});
        }catch (error){
            return res.status(400).json(error);
        }
    }
    async excluir(req, res){
        try{
            const {id}=req.params;
            const categoria=await categoriaService.excluir(id);
            return res.status(200).json({sucesso: "categoria excluída"});
        }catch (error){
            return res.status(400).json(error);
        }
    }
}

module.exports = new CategoriaController();