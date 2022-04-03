/*import { IDomainEvent, UniqueEntityID } from "@mokhal/node-ddd-toolkit-for-express";*/
import { IDomainEvent } from "@mokhal/node-ddd-toolkit-for-express/src/domain/events/IDomainEvent";
import { UniqueEntityID } from "@mokhal/node-ddd-toolkit-for-express/src/domain/UniqueEntityID";
import {Account} from "../Account";

export class AccountActivated implements IDomainEvent {
    private _account : Account;
    dateTimeOccurred: Date;

    constructor(account: Account) {
        this.dateTimeOccurred = new Date();
        this._account = account
    }

    getAggregateId(): UniqueEntityID {
        return this._account.id;
    }
}