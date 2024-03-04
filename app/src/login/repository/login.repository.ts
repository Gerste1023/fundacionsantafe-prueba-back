import { autoInjectable } from "tsyringe";
import { User } from "../model/login.model";

@autoInjectable()
export class LoginRepository {

    async getUserByEmail(email: string) {
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw Error("Usuario no existe");
            }
            return user;
        } catch (error: any) {
            throw Error(error.message)
        }
    }

}