import * as passport from "passport";

const authenicate = () => passport.authenticate("basic", { session: false });

export { authenicate };
