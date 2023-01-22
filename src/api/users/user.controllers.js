const passport = require('passport');

//REGISTER
const registerPost = async (req, res, next) => {
  try {
    const done = (error, user) => {
      if (error) return next(error);

      req.logIn(user, (error) => {
        if (error) return next(error);
        console.log('NEW USER REGISTERED AND LOGED IN')
        return res.status(201).json(user);
      })
    };

    passport.authenticate('registrito', done)(req)


  }
  catch(error){
    return next(error);
  }
}

//LOGIN
const loginPost = async (req, res, next) => {
  try {
    const done = (error, user) => {
      if (error) return next(error);

      req.logIn(user, (error) => {
        if (error) return next(error);

        return res.status(200).json(user);
      })
    };

    passport.authenticate('super-login', done)(req);
  }
  catch (error) {
    return next(error)
  }
}


module.exports = {
  registerPost,
  loginPost
}