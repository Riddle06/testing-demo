import "../__shared__/base-test";
import { isArray } from "class-validator";
import { Container } from "typedi";
import { APIUserController } from './api-user.controller';

jest.mock('../repositories/api-user.repository');

describe('get api users', () => {

    test('it should be return array', async () => {
        const apiUserController = Container.get(APIUserController);
        const { items, page } = await apiUserController.getAllUsers()
        expect(isArray(items)).toBeTruthy()
        expect(page).toBeDefined()
    })

})

describe('create api user named "account-1"', () => {
    test('return value item account is "account-1"', async () => {
        const apiUserController = Container.get(APIUserController);
        const { item } = await apiUserController.createUser({ account: 'account-1', name: 'name' });
        expect(item.account).toBe(item.account)
    })
})