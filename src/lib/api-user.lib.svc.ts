import { APIUser } from "@view-models/api-user.vm";
import { Page } from "@view-models/result.vm";
import { Inject, Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { APIUserRepository } from '../repositories/api-user.repository';

@Service()
export class APIUserLibSvc {

    @Inject('APIUserRepository')
    protected readonly apiUserRepository: APIUserRepository
    async getAPIUsers(): Promise<[APIUser[], Page]> {
        const [entities, count] = await this.apiUserRepository.getAllAPIUsers()
        return [entities, { dataAmount: count, pageAmount: 1 }]
    }
}