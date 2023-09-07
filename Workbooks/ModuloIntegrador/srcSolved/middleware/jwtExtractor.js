import jwt from 'jsonwebtoken';
import DTokenErrors from '../constants/DTokenErrors.js';
import config from '../config/config.js';

export const extractUserFromJWT = (req, res, next) => {
  const cookie = req.cookies[config.jwt.COOKIE];
  if(!cookie) return next();
  try {
    const content = jwt.verify(cookie,config.jwt.SECRET);
    req.user = content;
    next();
  } catch (error) {
    console.log(error);
    console.log(Object.keys(error));
    console.log(error.message);
    switch(error.message){
      case DTokenErrors.EXPIRED:
        return res.sendUnauthorized(`Su token dejó de ser válido a partir de ${error.expiredAt}, reloguearse`)
      case DTokenErrors.CORRUPT:
        return res.sendUnauthorized('No es posible definir el algoritmo de cifrado del token, favor de regenerarlo');
      case DTokenErrors.MALFORMED:
        return res.sendUnauthorized('La codificación del token es errónea, favor de regenerar el token');
    }
  }
};
