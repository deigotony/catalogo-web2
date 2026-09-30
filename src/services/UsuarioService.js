const UsuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {
    constructor(repositorio){ // usuarioRepository por padrão
        this.repository=repositorio;
    }

    async cadastrarUsuario({nome, email, senha}){
        if(!nome || !email || !senha){
            throw new Error('todos os campos são obrigatórios');
        }

        const usuariosExistentes = await this.repository.listarTodos({email: email});
        if(usuariosExistentes.length > 0){
            throw new Error('email já cadastrado no sistema')
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)){
            throw new Error("email inválido");
        }

        const novoUsuario = await this.repository.criar({
            nome,
            email,
            senha
        });

        return {
            usuarioId: novoUsuario.usuarioId,
            nome: novoUsuario.nome,
            email: novoUsuario.email,
            senha: novoUsuario.senha
        };
    }   

    async autenticar({email, senha}){
        if(!email || !senha){
            throw new Error('email e senha sao obrigatorios');
        }

        const usuarios = await this.repository.listarTodos({email});
        const usuario = usuarios[0];

        if(!usuario){
            throw new Error('credenciais invalidas');
        }

        if(usuario.senha !== senha){
            throw new Error('credenciais invalidas');
        }

        return {
            usuarioId: usuario.usuarioId,
            nome: usuario.nome,
            email: usuario.email
        };
    }

    async buscarPorId(id){
        const usuario = await this.repository.buscarPorId(id);
        if(!usuario){
            throw new Error('usuario nao encontrado');
        }
        return {
            usuarioId: usuario.usuarioId,
            nome: usuario.nome,
            email: usuario.email
        };
    }

    async listarTodos(t=undefined){
        return await this.repository.listarTodos();
    }
    /*
    atualizar(id, dados, t=undefined){
        return Usuario.update(dados, {where: {usuarioId: id}, transaction: t});
    }
    excluir(id, t=undefined){
        return Usuario.destroy({where: {usuarioId: id}, transaction: t});
    }*/

}

module.exports = new UsuarioService(UsuarioRepository);