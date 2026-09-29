const ItemRepository = require('../repositories/ItemRepository');
const itemRepository = new ItemRepository();

class ItemService{
    async cadastrarItem({usuarioId, categoriaId, nome, descricao, urlImagem, data}){
        if(!nome || !urlImagem || !data || !usuarioId){
            throw new Error('nome, url da imagem, data e usuario sao obrigatórios');
        }

        return await itemRepository.criar({
            usuarioId,
            categoriaId: categoriaId || null,
            nome,
            descricao,
            urlImagem,
            data
        });
    }

    async listarItens(condicoes = {}){
        return await itemRepository.listarTodos(condicoes);
    }

    async buscarPorId(id){
        const item = await itemRepository.buscarPorId(id);
        if(!item){
            throw new Error('item nao encontrado');
        }
        return item;
    }

    async atualizarItem(itemId, usuarioId, dados) {
        const item = await itemRepository.buscarPorId(itemId);
        if(!item){
            throw new Error('item nao encontrado');
        }

        if(item.usuarioId !== usuarioId){
            throw new Error('acesso negado, voce nao tem permissão pra alterar esse item');
        }

        await itemRepository.atualizar(itemId, dados);
        return await itemRepository.buscarPorId(itemId);
    }

    async excluirItem(itemId, usuarioId) {
        const item = await itemRepository.buscarPorId(itemId);
        if(!item){
            throw new Error('item nao encontrado');
        }

        if(item.usuarioId !== usuarioId){
            throw new Error('acesso negado, voce nao tem permissao pra alterar esse item');
        }

        return await itemRepository.excluir(itemId);
    }
}

module.exports = new ItemService();