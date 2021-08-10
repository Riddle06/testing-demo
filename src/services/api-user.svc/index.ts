import { Inject, Service } from "typedi";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { APIUser, CreateAPIUserParameter } from '../../view-models/api-user.vm';
import { Page } from '../../view-models/result.vm';
import { APIUserLibSvc } from '../../lib/api-user.lib.svc';

@Service()
export class APIUserSvc {

    @Inject()
    protected apiUserLibSvc: APIUserLibSvc

    @Transactional()
    async getAPIUsers(): Promise<[APIUser[], Page]> {
        return this.apiUserLibSvc.getAPIUsers()
    }

    @Transactional()
    async createAPIUser(param: CreateAPIUserParameter): Promise<APIUser> {
        return this.apiUserLibSvc.createAPIUser(param);
    }
}