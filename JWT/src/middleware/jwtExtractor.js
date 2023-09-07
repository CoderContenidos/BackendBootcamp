import jwt from 'jsonwebtoken';

export const extractUserFromJWT = (req, res, next) => {
  const cookie = req.cookies['authToken'];
  try {
    const content = jwt.verify(cookie, 'secretJWT',{audience:'paps'});
    console.log(content);
    next();
  } catch (error) {
    next();
  }
};
