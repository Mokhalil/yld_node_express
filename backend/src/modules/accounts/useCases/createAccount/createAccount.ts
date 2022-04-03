import {UniqueEntityID, UseCase} from "@mokhal/node-ddd-toolkit-for-express";
import {AccountsRepository} from "../../repos/implementation/AccountsRepository";
import {IAccountsRepository} from "../../repos/IAccountsRepository";

export class CreateAccountUseCase implements UseCase<any,any>{
    private _repo : IAccountsRepository;
    constructor(repo:IAccountsRepository) {
        this._repo = repo;
    }
   async execute(request?: any): Promise<any> {
        try {
            const account = await this._repo.getAccountById(new UniqueEntityID('00u48cr2c39yqI3A55d7'))
            return  account;
        }
        catch (error){

        }
    }
}