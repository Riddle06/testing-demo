import { IsString } from "class-validator";
export class APIUser {
    id: string
    name: string
    account: string
    applicationId: string
    dateCreated: Date
    dateUpdated: Date
}


export class CreateAPIUserParameter {

    @IsString()
    name: string

    @IsString()
    account: string
}