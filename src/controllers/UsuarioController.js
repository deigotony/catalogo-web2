const usuarioService = require('../services/UsuarioService');
const { sessoes } = require('../middlewares/authMiddleware');
class UsuarioController {
    async cadastrar(req, res){
        try{
            const {nome, email, senha} = req.body;
            const novoUsuario = await usuarioService.cadastrarUsuario({nome, email, senha});
            return res.status(201).json({sucesso: 'usuario cadastrado com sucesso', usuario: novoUsuario});
        }catch(error){
            return res.status(400).json(error);
        }
    }

    async listarTodos(req, res){
        try{
            const lista= await usuarioService.listarTodos();
            return res.status(200).json(lista);
        } catch (error){
            return res.status(400).json(error);
        }
    }

    async buscarPorId(req, res){
        try{
            const {id}=req.params;
            const usuario=await usuarioService.buscarPorId(id);
            return res.status(200).json(usuario);
        } catch (error){
            return res.status(404).json(error);
        }
    }
    
    async alterar(req, res){
        try{
            const {id}=req.params;
            const usuario= await usuarioService.atualizar(id, req.body);
            return res.status(201).json({sucesso: "usuário atualizado com sucesso", usuario});
        } catch (error){
            return res.status(400).json(error);
        }
    }
    async excluir(req, res){
        try{
            const {id}=req.params;
            const usuario=await usuarioService.excluir(id);
            return res.status(201).json({sucesso: "usuário removido com sucesso", usuario});
        } catch(error){
            return res.status(404).json(error);
        }
    }
    async login(req, res){
        try{
            const {email, senha} = req.body;
            const usuario = await usuarioService.autenticar({email, senha});

            const sessionId = Math.random().toString(36).substring(2) + Date.now();

            sessoes[sessionId] = usuario;

            res.setHeader('Set-Cookie', `sessionId=${sessionId}; Path=/; HttpOnly`);
            return res.status(200).json({sucesso: 'login realizado com sucesso', usuario});
        }catch(error){
            return res.status(400).json({erro: error.message});
        }
    }

    async logout(req, res){
        try{
            const cookieHeader = req.headers.cookie;
            let cookieSession;

            if(cookieHeader){
                cookieSession = cookieHeader.split('; ').find(row => row.startsWith('sessionId='));
            }
            if(cookieSession){
                const sessionId = cookieSession.split('=')[1];
                delete sessoes[sessionId]
            }
            res.setHeader('Set-Cookie', 'sessionId=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
            return res.status(200).json({sucesso: 'sessão encerrada com sucesso'});
        }catch(error){
            return res.status(500).json({erro: 'erro ao encerrar sessão'});
        }
    }

    async me(req, res) {
        if(!req.session.user){
            return res.status(401).json({erro: 'não autenticado'});
        }
        return res.status(200).json(req.session.user);
    }
}

module.exports = new UsuarioController();