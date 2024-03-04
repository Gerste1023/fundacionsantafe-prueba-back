import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
  json
} from "express";

import cors from "cors";
import fs from "fs";
import { expressjwt } from "express-jwt";
export class Servidor {
  app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.app.set("port", this.port || process.env.PORT || 9000);
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.app.use(express.static(__dirname + "/public"));
    this.app.use(cors());
    this.app.use(json());
    this.app.use(
      expressjwt({
        secret: process.env.SECRET_TOKEN as string,
        requestProperty: "token",
        algorithms: ["HS256"],
      }).unless({
        path: ["/api/v1/login"],
      })
    );
    this.app.use(
      (
        err: ErrorRequestHandler,
        req: Request,
        res: Response,
        next: NextFunction
      ) => {
        if (err.name === "UnauthorizedError") {
          res.status(401).send("Unauthorized");
        }
      }
    );
  }

  routes() {
    const routes = this.getRoutes();
    routes.forEach(async (route) => {
      try {
        const patch = await import(`./src/${route}/api/${route}.api`);
        this.app.use(`/api/v1/${route}`, patch.default);
      } catch (error) {
        console.error(`Not exist file api for ${route}`);
      }
    });
  }

  private getRoutes() {
    return fs.readdirSync(`${__dirname}/src`);
  }

  async listen() {
    this.app.listen(this.app.get("port"));
    console.log("Server Ready", this.app.get("port"));
  }
}
