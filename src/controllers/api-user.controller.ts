import { Body, Controller, Get, Post, QueryParams } from "routing-controllers";
import { ItemsResult, ItemResult, ResultCode } from '../view-models/result.vm';
import { APIUser, CreateAPIUserParameter } from '../view-models/api-user.vm';
import { APIUserSvc } from '../services/api-user.svc/index';
import { Inject, Service } from 'typedi';


@Service()
@Controller('/v1/api-users')
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
    async createUser(@Body() param: CreateAPIUserParameter): Promise<ItemResult<APIUser>> {

        const item = await this.apiUserSvc.createAPIUser(param);

        return {
            success: true,
            code: ResultCode.success,
            item
        };
    }
}