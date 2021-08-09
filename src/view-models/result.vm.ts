export class Result {
    success: boolean
    code: ResultCode
    message?: string
}

export enum ResultCode {
    success = 0
}


export class ItemResult<T> extends Result {
    item: T
}

export class ItemsResult<T> extends Result {
    items: T[]
    page?: Page
}


export interface Page {
    dataAmount: number
    pageAmount: number
}