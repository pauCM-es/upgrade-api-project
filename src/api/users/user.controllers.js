const passport = require('passport');
const Print = require('../prints/print.model');

//REGISTER
const registerPost = (req, res, next) => {
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
const loginPost = (req, res, next) => {
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

const logoutPost = async (req, res, next) => {
  try {
      const logoutUser = (error) => {
          if (error) return next(error);

          req.session.destroy(() => {
              res.clearCookie("connect.sid");
              return res.status(200).json("Te has deslogueado correctamente. Hasta pronto!");
          });
      };

      await req.logout(logoutUser);
  } catch (error) {
      return next(error);
  }
};

const checkSessionGet = (req, res, next) => {
  try {
      if(!req.user) {
          return res.status(200).json(null);
      }
      const userWithoutPass = req.user.toObject();
      Reflect.deleteProperty(userWithoutPass, 'password');
      return res.status(200).json(userWithoutPass);
  } catch (error) {
      return next(error);
  }
};


const getPrints = async (req, res, next) => {
  try {
    const allPrints = await Print.find({user: req.user._id}).populate({path: 'thingy', select: 'title'})
    return res.status(200)
              .json({
                user: req.user.alias,
                prints: allPrints
              });
  }
  catch (error) {
    return next(error);
  }
}


module.exports = {
  registerPost,
  loginPost,
  getPrints,
  logoutPost,
  checkSessionGet
}