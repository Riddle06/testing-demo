import { Service } from "typedi";
import { EntityRepository } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { ApiUserEntity } from '../entities/api-user.entity';
import { CreateAPIUserParameter } from '../view-models/api-user.vm';

@Service('APIUserRepository')
export class APIUserRepository implements IApiUserRepository {
    async createAPIUser(param: CreateAPIUserParameter): Promise<ApiUserEntity> {
        throw new Error("Method not implemented.");
    }
    async getAllAPIUsers(): Promise<[ApiUserEntity[], number]> {
        throw new Error("Method not implemented.");
    }
}

@EntityRepository(ApiUserEntity)
export class APIUserEntityRepository extends BaseRepository<ApiUserEntity> { }

export interface IApiUserRepository {
    getAllAPIUsers(): Promise<[ApiUserEntity[], number]>
    createAPIUser(param: CreateAPIUserParameter): Promise<ApiUserEntity>
}