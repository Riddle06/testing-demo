import { CreateAPIUserParameter } from "@view-models/api-user.vm";
import { Service } from "typedi";
import { ApiUserEntity } from "../../entities/api-user.entity";
import { IApiUserRepository } from '../../repositories/api-user.repository';
export const apiUser: ApiUserEntity = new ApiUserEntity();
apiUser.id = "demo-1";


@Service('APIUserRepository')
export class APIUserRepository implements IApiUserRepository {
    async createAPIUser(param: CreateAPIUserParameter): Promise<ApiUserEntity> {
        const apiUser = new ApiUserEntity();
        apiUser.id = (new Date()).getTime().toString()
        apiUser.name = param.name;
        apiUser.account = param.account;
        return apiUser;
    }

    
    async getAllAPIUsers(): Promise<[ApiUserEntity[], number]> {
        return [[apiUser], 1]
    }
}

