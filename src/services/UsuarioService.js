const UsuarioRepository = require('../repositories/UsuarioRepository');
const usuarioRepository = new UsuarioRepository();

class UsuarioService {
    async cadastrarUsuario({nome, email, senha}){
        if(!nome || !email || !senha){
            throw new Error('todos os campos são obrigatórios');
        }

        const usuariosExistentes = await usuarioRepository.listarTodos({email});
        if(usuariosExistentes.length > 0){
            throw new Error('email já cadastrado no sistema')
        }

        const novoUsuario = await usuarioRepository.criar({
            nome,
            email,
            senha
        });

        return {
            usuarioId: novoUsuario.usuarioId,
            nome: novoUsuario.nome,
            email: novoUsuario.email
        };
    }   

    async autenticar({email, senha}){
        if(!email || !senha){
            throw new Error('email e senha sao obrigatorios');
        }

        const usuarios = await usuarioRepository.listarTodos({email});
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
        const usuario = await usuarioRepository.buscarPorId(id);
        if(!usuario){
            throw new Error('usuario nao encontrado');
        }
        return {
            usuarioId: usuario.usuarioId,
            nome: usuario.nome,
            email: usuario.email
        };
    }
}

module.exports = new UsuarioService();