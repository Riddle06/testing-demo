import "./base-test";
import { isArray } from "class-validator";
import { Container } from "typedi";
import { APIUserController } from '../controllers/api-user.controller';
import { APIUserRepository } from "../repositories/__mocks__/api-user.repository";

describe('get api users', () => {

    test('it should be return array', async () => {
        const apiUserController = Container.get(APIUserController);
        Container.set('APIUserRepository', APIUserRepository)
        const { items, page } = await apiUserController.getAllUsers()
        expect(isArray(items)).toBeTruthy()
        expect(page).toBeDefined()
    })

})