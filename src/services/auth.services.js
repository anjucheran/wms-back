import passport from 'passport';
import LocalStrategy from 'passport-local';
import { compareSync } from 'bcrypt-nodejs';

import models from '../database/models';

const User = models.User;

// local auth
const localOpts = {
  usernameField: 'email',
};

const comparePassword = (password, userpass) => {
    return compareSync(password, userpass);
  }

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
    } else if(!comparePassword(password, user.password)) {
      return done(null, false);
    }
    return done(null, user.get());
  } catch (e) {
    return done(e, false);
  }
});

passport.use(localStrategy);

export const authLocal = passport.authenticate('local', { session: false });
