import { Service } from "typedi";
import { EntityRepository } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { ApiUserEntity } from '../entities/api-user.entity';

@Service('APIUserRepository')
export class APIUserRepository implements IApiUserRepository {
    async getAllAPIUsers(): Promise<[ApiUserEntity[], number]> {
        throw new Error("Method not implemented.");
    }
}

@EntityRepository(ApiUserEntity)
export class APIUserEntityRepository extends BaseRepository<ApiUserEntity> { }

export interface IApiUserRepository {
    getAllAPIUsers(): Promise<[ApiUserEntity[], number]>
}