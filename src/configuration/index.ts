import * as dotenv from "dotenv";
dotenv.config();

export interface Configuration {
    app: {
        port: number
        env: string
    }
}

export const configuration: Configuration = {
    app: {
        port: +process.env.APP_PORT,
        env: process.env.env
    }
}