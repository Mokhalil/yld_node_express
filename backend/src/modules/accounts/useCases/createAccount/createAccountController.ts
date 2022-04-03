import { BaseController } from "@mokhal/node-ddd-toolkit-for-express";
import {Request,Response} from "express";
import {CreateAccountUseCase} from "./createAccount";

export class CreateAccountController extends BaseController{
    private _useCase : CreateAccountUseCase;
    constructor(useCase:CreateAccountUseCase) {
        super();
        this._useCase = useCase;
    }
    protected executeImpl(req: Request, res: Response): Promise<any> {
        this._useCase.execute();
        return Promise.resolve(undefined);
    }
}