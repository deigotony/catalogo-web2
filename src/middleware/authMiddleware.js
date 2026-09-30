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

    if(sessionId && sessoes[sessionId]){
        req.user = sessoes[sessionId];
        return next();
    }
    return res.status(401).json({erro: 'nao autorizado'})
}   

module.exports = {estaAutenticado, sessoes};