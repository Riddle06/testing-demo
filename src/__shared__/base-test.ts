import "reflect-metadata";
import { Connection } from "typeorm";
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';

jest.mock('typeorm-transactional-cls-hooked', () => ({
    initializeTransactionalContext: () => { },
    Transactional: () => jest.fn(),
    BaseRepository: class { }
}));

let db: Connection;

beforeAll(async () => {
    
});


afterAll(async () => {

});