const CategoriaRepository = require('../repositories/CategoriaRepository');

class CategoriaService {
    constructor(repositorio=categoriaRepository){
        this.repository=repositorio;
    }
    async listarTodas() {
        return await this.repository.listarTodos();
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
}

module.exports = new CategoriaService(CategoriaRepository);