import { APIUser } from "@view-models/api-user.vm";
import { Page } from "@view-models/result.vm";
import { Inject, Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { APIUserRepository } from '../repositories/api-user.repository';
import { CreateAPIUserParameter } from '../view-models/api-user.vm';

@Service()
export class APIUserLibSvc {

    
    @Inject('APIUserRepository') 
    protected readonly apiUserRepository: APIUserRepository

    async getAPIUsers(): Promise<[APIUser[], Page]> {
        const [entities, count] = await this.apiUserRepository.getAllAPIUsers()
        return [entities, { dataAmount: count, pageAmount: 1 }]
        
    }

    async createAPIUser(param: CreateAPIUserParameter): Promise<APIUser> {
        const entity = await this.apiUserRepository.createAPIUser(param);
        return entity;
    }
}