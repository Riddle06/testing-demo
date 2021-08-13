import { createConnection } from "typeorm";
import { configuration } from "../configuration";
import * as path from "path";
import { ApiUserEntity } from '../entities/api-user.entity';


export async function getDBConnection() {
    const { host, port, databaseName, password, user, connectionName, logging } = configuration.db;
    console.log(`configuration.db`, configuration.db)
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