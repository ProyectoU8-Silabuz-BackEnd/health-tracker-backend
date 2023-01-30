import passport from "passport";
import jwtStrategy from "./strategies/jwt";
import localStrategy from "./strategies/local";



passport.use(jwtStrategy);
passport.use(localStrategy);

