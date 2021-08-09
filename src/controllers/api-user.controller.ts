import { Controller, Get, Post, QueryParams } from "routing-controllers";
import { ItemsResult, ItemResult, ResultCode } from '../view-models/result.vm';
import { APIUser } from '../view-models/api-user.vm';
import { APIUserSvc } from '../services/api-user.svc/index';
import { Inject, Service } from "typedi";

@Controller('/v1/api-users')
@Service()
export class APIUserController {

    @Inject()
    protected apiUserSvc: APIUserSvc

    @Get('/')
    async getAllUsers(): Promise<ItemsResult<APIUser>> {

        const [items, page] = await this.apiUserSvc.getAPIUsers();

        return {
            success: true,
            code: ResultCode.success,
            items,
            page
        }
    }

    @Post('/')
    async createUser(): Promise<ItemResult<APIUser>> {
        return {
            success: true,
            code: ResultCode.success,
            item: null
        };
    }
}