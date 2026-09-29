const CategoriaRepository = require('../repositories/CategoriaRepository');
const categoriaRepository = new CategoriaRepository();

class CategoriaService {
    async listarTodas() {
        return await categoriaRepository.listarTodos();
    }

    async criarCategoria(nome) {
        if(!nome){
            throw new Error('nome da categoria obrigatorio');
        }

        const categoriasExistentes = await categoriaRepository.listarTodos({nome});
        if(categoriasExistentes.length > 0){
            throw new Error('categoria ja existe');
        }

        return await categoriaRepository.criar({nome});
    }
}

module.exports = new CategoriaService();