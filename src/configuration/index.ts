import * as dotenv from "dotenv";
dotenv.config();

export interface Configuration {
    app: {
        port: number
        env: string
    },
    db: DatabaseConfig;
}
export interface DatabaseConfig {
    host: string
    port: number
    user: string
    password: string
    databaseName: string
    connectionName: string
    logging: boolean
}


export const configuration: Configuration = {
    app: {
        port: +process.env.APP_PORT,
        env: process.env.env
    },
    db: {
        host: process.env.MAIN_DB_HOST,
        port: +process.env.MAIN_DB_HOST_PORT,
        user: process.env.MAIN_DB_USER,
        password: process.env.MAIN_DB_PASSWORD,
        databaseName: process.env.MAIN_DB_DATABASE_NAME,
        connectionName: 'default',
        logging: process.env.MAIN_DB_LOGGING === "true"
    }
}