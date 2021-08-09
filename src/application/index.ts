import { createExpressServer, useContainer } from "routing-controllers";
// import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';
import { Express } from "express";
import { configuration } from "../configuration";
import * as path from "path";
import { Container } from "typedi";

export class Application {
    async start() {
        // initializeTransactionalContext()
        useContainer(Container)
        const app: Express = createExpressServer({
            routePrefix: '/api',
            controllers: [path.join(__dirname, '../controllers/**/*.js')]
        });

        app.listen(configuration.app.port, () => {
            console.log(`service start on port ${configuration.app.port}`)
        })
    }
}