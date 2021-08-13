import { Service } from "typedi";
import { EntityRepository } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { InjectRepository } from "typeorm-typedi-extensions";
import { ApiUserEntity } from '../entities/api-user.entity';
import { CreateAPIUserParameter } from '../view-models/api-user.vm';


@EntityRepository(ApiUserEntity)
export class APIUserEntityRepository extends BaseRepository<ApiUserEntity> { }


@Service('APIUserRepository')
export class APIUserRepository implements IApiUserRepository {

    @InjectRepository()
    protected readonly apiUserEntityRepository: APIUserEntityRepository
    async createAPIUser(param: CreateAPIUserParameter): Promise<ApiUserEntity> {
        throw new Error("Method not implemented.");
    }
    async getAllAPIUsers(): Promise<[ApiUserEntity[], number]> {
        // throw new Error("Method not implemented.");
        const [entities, count] = await this.apiUserEntityRepository.findAndCount()
        return [entities, count];
    }
}

export interface IApiUserRepository {
    getAllAPIUsers(): Promise<[ApiUserEntity[], number]>
    createAPIUser(param: CreateAPIUserParameter): Promise<ApiUserEntity>
}