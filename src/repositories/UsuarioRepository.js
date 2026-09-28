const {Usuario}=require("../models/");
class UsuarioRepository{
    listarTodos(condicoes={}, t=undefined){
        return Usuario.findAll({where: condicoes, transaction: t});
    }
    criar(dados, t=undefined){
        return Usuario.create(dados, {transaction: t});
    }
    buscarPorId(id, t=undefined){
        return Usuario.findByPk(id, {transaction: t});
    }
    atualizar(id, dados, t=undefined){
        return Usuario.update(dados, {where: {usuarioId: id}, transaction: t});
    }
    excluir(id, t=undefined){
        return Usuario.destroy({where: {usuarioId: id}, transaction: t});
    }
}
module.exports=UsuarioRepository;