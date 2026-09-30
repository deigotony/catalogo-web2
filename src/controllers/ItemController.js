const itemService = require('../services/ItemService');
class ItemController {
    async listar(req, res) {
        try{
            const itens = await itemService.listarItens();
            return res.status(200).json(itens);
        }catch(error){
            return res.status(500).json({erro: error.message});
        }
    }

    async buscarPorId(req, res){
        try{
            const {id} = req.params;
            const item = await itemService.buscarPorId(id);
            return res.status(200).json(item);
        }catch (error){
            return res.status(404).json({erro: error.message});
        }
    }

    async buscarImagem(req, res){
        try{
            const {url}=req.params;
            const imagem=await itemService.buscarImagem(url);
            return res.status(200).json(imagem);
        }catch(error){
            return res.status(400).json(error);
        }
    }

    async cadastrar(req, res){
        try{
            /*if(!req.session || !req.session.user){
                return res.status(401).json({erro: 'você precisa estar logado para cadastrar um item'});
            }*/

            const {categoriaId, nome, descricao, data, usuarioId} = req.body;
            const urlImagem = req.file ? `/imagens/${req.file.filename}` :req.body.urlImagem;

            const novoItem = await itemService.cadastrarItem({
                //usuarioId: req.session.user.usuarioId,
                usuarioId,
                categoriaId,
                nome,
                descricao,
                urlImagem,
                data
            });

            return res.status(201).json({sucesso: 'item cadastrado com sucesso',item: novoItem});
        }catch(error){
            return res.status(400).json({erro: error.message});
        }
    }

    async atualizar(req, res){
        try{
            /*if(!req.session || !req.session.user){
                return res.status(401).json({erro: 'você precisa estar logado para alterar um item.'});
            }*/

            const{id} = req.params;
            //const usuarioId = req.session.user.usuarioId;
            const itemAtualizado = await itemService.atualizarItem(id, req.body);

            return res.status(200).json({sucesso: 'Item atualizado com sucesso.', item: itemAtualizado});
        }catch(error){
            return res.status(400).json({erro: error.message});
        }
    }

    async excluir(req, res){
        try{
            /*if(!req.session || !req.session.user){
                return res.status(401).json({erro: 'você precisa estar logado para remover um item'});
            }*/

            const {id} = req.params;
            //const usuarioId = req.session.user.usuarioId;
            await itemService.excluirItem(id);

            return res.status(200).json({sucesso: 'item removido com sucesso'});
        }catch(error){
            return res.status(400).json({erro: error.message});
        }
    }
}

module.exports = new ItemController();