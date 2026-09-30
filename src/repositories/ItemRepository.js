const {Item, Usuario}=require("../models/");
class ItemRepository{
    listarTodos(condicoes={}, t=undefined){
        return Item.findAll({include: Usuario, where: condicoes, transaction: t});
    }
    criar(dados, t=undefined){
        return Item.create(dados, {transaction: t});
    }
    buscarPorId(id, t=undefined){
        return Item.findByPk(id, {transaction: t});
    }
    atualizar(id, dados, t=undefined){
        return Item.update(dados, {where: {itemId: id}, transaction: t});
    }
    excluir(id, t=undefined){
        return Item.destroy({where: {itemId: id}, transaction: t});
    }
}
module.exports=new ItemRepository();