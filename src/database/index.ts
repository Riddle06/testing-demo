import { createConnection } from "typeorm";
import { configuration } from "../configuration";
import * as path from "path";


export async function getDBConnection() {
    const { host, port, databaseName, password, user, connectionName, logging } = configuration.db;
    const conn = await createConnection({
        name: connectionName,
        type: "mysql",
        host,
        port,
        username: user,
        password,
        database: databaseName,
        logger: 'advanced-console',
        logging,
        entities: [`${path.resolve(__dirname, `../entities/**/*.entity`)}.ts`, `${path.resolve(__dirname, `../entities/**/*.entity`)}.js`]
    });

    return conn;
}