const ItemRepository = require('../repositories/ItemRepository');

class ItemService{
    constructor(repositorio=itemRepository){
        this.repository=repositorio;
    }
    async cadastrarItem({usuarioId, categoriaId, nome, descricao, urlImagem, data}){
        if(!nome || !urlImagem || !data || !usuarioId){
            throw new Error('nome, url da imagem, data e usuario sao obrigatórios');
        }

        return await this.repository.criar({
            usuarioId,
            categoriaId: categoriaId || null,
            nome,
            descricao,
            urlImagem,
            data
        });
    }

    async listarItens(condicoes = {}){
        return await this.repository.listarTodos(condicoes);
    }

    async buscarPorId(id){
        const item = await this.repository.buscarPorId(id);
        if(!item){
            throw new Error('item nao encontrado');
        }
        return item;
    }

    async atualizarItem(itemId, usuarioId, dados) {
        const item = await this.repository.buscarPorId(itemId);
        if(!item){
            throw new Error('item nao encontrado');
        }

        if(item.usuarioId !== usuarioId){
            throw new Error('acesso negado, voce nao tem permissão pra alterar esse item');
        }

        await itemRepository.atualizar(itemId, dados);
        return await this.repository.buscarPorId(itemId);
    }

    async excluirItem(itemId, usuarioId) {
        const item = await this.repository.buscarPorId(itemId);
        if(!item){
            throw new Error('item nao encontrado');
        }

        if(item.usuarioId !== usuarioId){
            throw new Error('acesso negado, voce nao tem permissao pra alterar esse item');
        }

        return await this.repository.excluir(itemId);
    }
}

module.exports = new ItemService(ItemRepository);