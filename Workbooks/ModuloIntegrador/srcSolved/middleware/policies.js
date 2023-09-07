const handlePolicies = (policies) => {
  return (req, res, next) => {
    const user = req.user;
    console.log(user);
    if (policies[0] === 'PUBLIC') return next();
    if (policies[0] === 'AUTHENTICATED' && user) return next();
    if (policies[0] === 'NO_AUTH' && !user) return next();
    if (policies[0] === 'NO_AUTH' && user) return res.sendUnauthorized('Ya se encuentra logueado');
    if(policies.includes(user.role.toUpperCase())) return next();
  };
};

export default handlePolicies;
