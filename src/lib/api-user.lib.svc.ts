import { APIUser } from "@view-models/api-user.vm";
import { Page } from "@view-models/result.vm";
import { Inject, Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { APIUserRepository } from '../repositories/api-user.repository';
import { CreateAPIUserParameter } from '../view-models/api-user.vm';
import { ApiUserEntity } from '../entities/api-user.entity';

@Service()
export class APIUserLibSvc {


    @Inject('APIUserRepository')
    protected readonly apiUserRepository: APIUserRepository
    protected apiUserEntities: ApiUserEntity[]

    async getAPIUsers(): Promise<[APIUser[], Page]> {

        if (this.apiUserEntities) {
            return [this.apiUserEntities, { dataAmount: this.apiUserEntities.length, pageAmount: 1 }]
        }

        const [entities, count] = await this.apiUserRepository.getAllAPIUsers()

        this.apiUserEntities = entities;

        return [entities, { dataAmount: count, pageAmount: 1 }]
    }

    async createAPIUser(param: CreateAPIUserParameter): Promise<APIUser> {
        const entity = await this.apiUserRepository.createAPIUser(param);
        return entity;
    }
}