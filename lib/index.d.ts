/// <reference types="hapi__joi" />
import { DefineErrorMessages } from '@btime/error-messages';
export default class QueryStringAdapter {
    private defineErrorMessages;
    constructor(defineErrorMessages: DefineErrorMessages);
    _validate(data: any): import("@hapi/joi").ValidationResult;
    parseString(data: any): Promise<any>;
    parseObject(data: any): Promise<string>;
    parse(data: any): Promise<any>;
}
