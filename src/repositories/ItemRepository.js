const {Item, Usuario, Categoria}=require("../models/");
class ItemRepository{
    listarTodos(condicoes={}){
        return Item.findAll({include: [Usuario, Categoria], where: condicoes});
    }
    criar(dados){
        return Item.create(dados);
    }
    buscarPorId(id){
        return Item.findByPk(id, {include: [Usuario, Categoria]});
    }
    buscarImagem(url){
        return 
    }
    atualizar(id, dados){
        return Item.update(dados, {where: {itemId: id}});
    }
    excluir(id){
        return Item.destroy({where: {itemId: id}});
    }
}
module.exports=new ItemRepository();