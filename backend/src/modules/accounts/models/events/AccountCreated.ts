import { IDomainEvent, UniqueEntityID } from "@mokhal/node-ddd-toolkit-for-express";
import {Account} from "../Account";

export class AccountCreated implements IDomainEvent {
    constructor(account: Account) {
        this.dateTimeOccurred = new Date();
        this._account = account

    }

    dateTimeOccurred: Date;
    _account : Account
    getAggregateId(): UniqueEntityID {
        return this._account.id;
    }

}