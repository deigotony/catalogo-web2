const {Usuario}=require("../models/");
class UsuarioRepository{
    listarTodos(condicoes){
        return Usuario.findAll({where: condicoes});
    }
    criar(dados, t=undefined){
        return Usuario.create(dados, {transaction: t});
    }
    buscarPorId(id, t=undefined){
        return Usuario.findByPk(id, {transaction: t});
    }
    atualizar(id, dados){
        return Usuario.update(dados, {where: {usuarioId: id}});
    }
    excluir(id, t=undefined){
        return Usuario.destroy({where: {usuarioId: id}, transaction: t});
    }
}
module.exports=new UsuarioRepository();