module.exports = (req, res, next) => {
  if ( !req.user ) {
    res.status(401).send({ Error: 'You need to login'});
  }

  next();
};