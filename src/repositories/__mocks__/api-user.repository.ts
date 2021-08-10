import { Service } from "typedi";
import { ApiUserEntity } from "../../entities/api-user.entity";
import { IApiUserRepository } from '../../repositories/api-user.repository';
export const apiUser: ApiUserEntity = {
    id: "test-1",
    applicationId: "",
    serverPublicKey: "",
    serverPrivateKey: "",
    clientPublicKey: "",
    clientPrivateKey: "",
    status: 0,
    dateCreated: new Date(),
    dateLocked: null,
    dateEnabled: null,
    dateProcessing: new Date(),
    name: "",
    account: "",
    password: "",
    isDeleted: false,
    dateDeleted: null,
    dateUpdated: new Date(),
}

@Service('APIUserRepository')
export class APIUserRepository implements IApiUserRepository {
    async getAllAPIUsers(): Promise<[ApiUserEntity[], number]> {
        return [[apiUser], 1]
    }
}

