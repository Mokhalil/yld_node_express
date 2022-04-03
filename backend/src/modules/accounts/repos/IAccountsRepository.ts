import {Account} from "../models/Account";
import {UniqueEntityID} from "@mokhal/node-ddd-toolkit-for-express";

export interface IAccountsRepository{
    getAccountById(id:UniqueEntityID):Promise<Account>
    activateAccount(id:UniqueEntityID):Promise<void>,
    save(account:Account):Promise<void>
}