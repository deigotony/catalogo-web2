const sessoes = {};

function estaAutenticado(req, res, next){
    const cookieHeader = req.headers.cookie;
    if(!cookieHeader){
        return res.status(401).json({erro: 'não autorizado'});
    }

    const cookieDaSession = cookieHeader.split('; ').find(row => row.startsWith('sessionId='))
    let sessionId;
    if(cookieDaSession){
        sessionId = cookieDaSession.split('=')[1];
    }

    if (!sessionId || !sessoes[sessionId]) {
        return res.status(401).json({ erro: 'Sessão expirada ou não autorizada.' });
    }
    req.usuario = sessoes[sessionId];
    next();
}   

module.exports = {estaAutenticado, sessoes};