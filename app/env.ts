export const ENV_DATABASE = {
     Type: "mysql",
     Host: process.env.DB_HOST,
     UserDb: process.env.DB_USERNAME,
     Password: process.env.DB_PASSWORD,
     DataBase: process.env.DB_NAME,
     Port: process.env.DB_PORT
} as const

export const ENV_AUTH = {
     SecretToken: process.env.SECRET_TOKEN,
} as const

export const ENV = {
     Dev: process.env.ENV == "DEV",
     Prod: process.env.ENV == "PROD"
} as const


