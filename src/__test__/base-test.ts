import "reflect-metadata";
import { Connection } from "typeorm";
import { initializeTransactionalContext } from "typeorm-transactional-cls-hooked";
import { getDBConnection } from "../database";

let db: Connection;

beforeAll(async () => {
    initializeTransactionalContext()
    db = await getDBConnection()
});


afterAll(async () => {
    await db.close()
});