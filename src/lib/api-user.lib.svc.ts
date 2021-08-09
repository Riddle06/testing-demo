import { APIUser } from "@view-models/api-user.vm";
import { Page } from "@view-models/result.vm";
import { Service } from "typedi";

@Service()
export class APIUserLibSvc {
    async getAPIUsers(): Promise<[APIUser[], Page]> {
        return [[], null]
    }
}