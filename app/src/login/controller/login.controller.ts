import { autoInjectable } from "tsyringe";
import { LoginRepository } from "../repository/login.repository";
import { User } from "../model/login.model";
import { sign } from "jsonwebtoken";
import { ENV_AUTH } from "../../../env";

@autoInjectable()
export class LoginControllers {
    constructor(private loginRepository: LoginRepository) {

    }

    async validateUser(req: User) {
        try {
            const { email, password } = await this.loginRepository.getUserByEmail(req.email);
            if (req.email != email || req.password != password) {
                throw Error("Usuario o Contraseña invalida");
            }
            const token = sign({ email }, ENV_AUTH.SecretToken!);
            return token
        } catch (error: any) {
            throw Error(error.message)
        }
    }

}