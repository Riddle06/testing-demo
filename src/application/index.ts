import { createExpressServer, useContainer as useRCContainer } from "routing-controllers";
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';
import { Express } from "express";
import { configuration } from "../configuration";
import { getDBConnection } from '../database';
import { useContainer as useTypeORMContainer } from "typeorm";
import { APIUserController } from '../controllers/api-user.controller';
import { Container } from 'typeorm-typedi-extensions';


export class Application {
    async start() {

        useRCContainer(Container)
        console.log(`==== 1 useRCContainer`)
        useTypeORMContainer(Container)
        console.log(`==== 2 useTypeORMContainer`)
        await getDBConnection()
        console.log(`==== 3 getDBConnection`)
        initializeTransactionalContext()

        const app: Express = createExpressServer({
            routePrefix: '/api',
            controllers: [APIUserController]
        });

        app.listen(configuration.app.port, () => {
            console.log(`service start on port ${configuration.app.port}`)
        })
        
    }
}