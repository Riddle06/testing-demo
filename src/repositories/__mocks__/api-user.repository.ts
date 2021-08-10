import { Service } from "typedi";
import { ApiUserEntity } from "../../entities/api-user.entity";
import { IApiUserRepository } from '../../repositories/api-user.repository';
export const apiUser: ApiUserEntity = new ApiUserEntity();
apiUser.id = "demo-1";

@Service('APIUserRepository')
export class APIUserRepository implements IApiUserRepository {
    async getAllAPIUsers(): Promise<[ApiUserEntity[], number]> {
        return [[apiUser], 1]
    }
}

