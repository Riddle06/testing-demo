import { EntityRepository } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { ApiUserEntity } from '../entities/api-user.entity';

@EntityRepository(ApiUserEntity)
export class APIUserRepository extends BaseRepository<ApiUserEntity> implements IApiUserRepository {
    getAllAPIUsers(): Promise<[ApiUserEntity[], number]> {
        throw new Error("Method not implemented.");
    }
}


export interface IApiUserRepository {
    getAllAPIUsers(): Promise<[ApiUserEntity[], number]>
}