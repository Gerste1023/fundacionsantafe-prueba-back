
import { Response, Request, Router } from "express";
import { container } from "tsyringe";
import { LoginControllers } from "../controller/login.controller";
import { User } from "../model/login.model";

const router = Router();
const controller = container.resolve(LoginControllers)

router.post("/", async (req: Request, res: Response) => {
    try {
        const user = req.body as User;
        const validUser = await controller.validateUser(user);
        res.status(200).json(validUser)
    } catch (error: any) {
        res.status(400).json({ error });
    }
});

export default router;