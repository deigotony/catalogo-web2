const usuarioService = require('../services/UsuarioService');
class UsuarioController {
    async cadastrar(req, res){
        try{
            const {nome, email, senha} = req.body;
            const novoUsuario = await usuarioService.cadastrarUsuario({nome, email, senha});
            return res.status(201).json({sucesso: 'usuario cadastrado com sucesso', usuario: novoUsuario});
        }catch(error){
            return res.status(400).json({erro: error.message});
        }
    }

    async listarTodos(req, res){
        try{
            const lista= await usuarioService.listarTodos();
            return res.status(200).json(lista);
        } catch (error){
            return res.status(400).json({erro: error.message});
        }
    }

    async buscarPorId(req, res){
        try{
            const {id}=req.params;
            const usuario=await usuarioService.buscarPorId(id);
            if (!usuario) return res.status(404).json({erro: "usuário não encontrado"});
            return res.status(200).json(usuario);
        } catch (error){
            return res.status(400).json({erro: error.message});
        }
    }

    async login(req, res){
        try{
            const {email, senha} = req.body;
            const usuario = await usuarioService.autenticar({email, senha});

            req.session.regenerate((err) => {
                if(err){
                    return res.status(500).json({erro: 'erro ao iniciar sessão'});
                }
                req.session.user = usuario;
                return res.status(200).json({sucesso: 'login realizado com sucesso', usuario});
            });
        }catch(error){
            return res.status(400).json({erro: error.message});
        }
    }

    async logout(req, res){
        req.session.destroy((err) => {
            if(err){
                return res.status(500).json({erro: 'erro ao encerrar sessão'});
            }
            res.clearCookie('connect.sid');
            return res.status(200).json({sucesso: 'sessão encerrada com sucesso'});
        });
    }

    async me(req, res) {
        if(!req.session.user){
            return res.status(401).json({erro: 'não autenticado'});
        }
        return res.status(200).json(req.session.user);
    }
}

module.exports = new UsuarioController();