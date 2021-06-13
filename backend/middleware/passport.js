import jwtPkg from "passport-jwt";
import User from "../models/userModel.js";
import dotenv from "dotenv";
import passport from "passport";
dotenv.config();
const option = {
  jwtFromRequest: jwtPkg.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

export const JwtPassport = (passport) => {
  passport.use(
    new jwtPkg.Strategy(option, async (payload, done) => {
      try {
        const user = await await User.findById(payload.id);
        if (user) {
          done(null, user._id);
        } else {
          done(null, false);
        }
      } catch (error) {
        console.log(error);
      }
    })
  );
};

export const jwtGuard = () => {
  return passport.authenticate("jwt", { session: false });
};
