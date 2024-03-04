import { DataSource } from "typeorm";
import { ENV, ENV_DATABASE } from "./env";

export const dataBaseInit = async () => {
  const database = new DataSource({
    type: ENV_DATABASE.Type,
    host: ENV_DATABASE.Host,
    username: ENV_DATABASE.UserDb,
    password: ENV_DATABASE.Password,
    database: ENV_DATABASE.DataBase,
    port: Number(ENV_DATABASE.Port),
    entities: [__dirname + "/**/model/**.model{.ts,.js}"],
    synchronize: true,
    dropSchema: false,
    logger: "advanced-console",
    logging: false
  });
  await database.initialize();
};

