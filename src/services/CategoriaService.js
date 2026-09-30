const CategoriaRepository = require('../repositories/CategoriaRepository');

class CategoriaService {
    constructor(repositorio=categoriaRepository){
        this.repository=repositorio;
    }
    async criarCategoria(nome) {
        if(!nome){
            throw new Error('nome da categoria obrigatorio');
        }

        const categoriasExistentes = await this.repository.listarTodos({nome});
        if(categoriasExistentes.length > 0){
            throw new Error('categoria ja existe');
        }

        return await this.repository.criar({nome});
    }
    async listarTodas() {
        return await this.repository.listarTodos();
    }
    async buscarPorId(id){
        const categoria=await this.repository.buscarPorId(id);
        if (!categoria) throw ({erro: "categoria não encontrada"});
        return categoria;
    }
    async atualizar(id, dados){
        const categoria=await this.repository.atualizar(id, dados);
        if (!categoria) throw ({erro: "categoria não encontrada"});
        return categoria;
    }
    async excluir(id){
        const categoria=await this.repository.excluir(id);
        if (!categoria) throw ({erro: "categoria não encontrada"});
        return categoria;
    }
}

module.exports = new CategoriaService(CategoriaRepository);