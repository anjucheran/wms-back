import passport from 'passport';
import LocalStrategy from 'passport-local';

import models from '../database/models';

const User = models.User;

const localOpts = {
  usernameField: 'email',
};

const localStrategy = new LocalStrategy(localOpts, async (email, password, done) => {
  try {
    const user = await User.findOne({
      where: {email: email}
    });
    if(user) {
      console.log(user.dataValues);
    }
    if(!user) {
      return done(null, false);
    } else if(!(user.comparePassword(password))) {
      return done(null, false);
    }
    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});

passport.use(localStrategy);

export const authLocal = passport.authenticate('local', { session: false });
