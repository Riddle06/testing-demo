import "reflect-metadata";
import { isArray } from "class-validator";
import { Container } from "typedi";
import { APIUserController } from '../src/controllers/api-user.controller';

test('get api users', async () => {
    const apiUserController = Container.get(APIUserController);
    const { items, page } = await apiUserController.getAllUsers()
    expect(isArray(items)).toBeTruthy()
})