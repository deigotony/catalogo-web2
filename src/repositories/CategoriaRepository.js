const {Categoria}=require("../models/");

class CategoriaRepository{
    listarTodos(condicoes={}, t=undefined){
        return Categoria.findAll({where: condicoes, transaction: t});
    }
    criar(dados, t=undefined){
        return Categoria.create(dados, {transaction: t});
    }
    buscarPorId(id){
        return Categoria.findByPk(id);
    }
    atualizar(id, dados, t=undefined){
        return Categoria.update(dados, {where: {categoriaId: id}, transaction: t});
    }
    excluir(id, t=undefined){
        return Categoria.destroy({where: {categoriaId: id}, transaction: t});
    }
}
module.exports=new CategoriaRepository();