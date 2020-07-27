function register(req, res, next) {
  const { email, password } = req.body;

  // res.send(err);
  // res.sendStatus(200);
}

module.exports = {
  register,
};
