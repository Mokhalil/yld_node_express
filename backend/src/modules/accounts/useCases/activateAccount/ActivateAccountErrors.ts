import { Result, UseCaseError } from "@mokhal/node-ddd-toolkit-for-express";
import {UserStatus} from "@okta/okta-sdk-nodejs";
import {Account} from "../../models/Account";

export namespace ActivateAccountErrors{
    export class AccountIsNotStaged extends Result<UseCaseError>{
        constructor(account: Account) {
            super(false,`Account ${account.login} cannot be activated. Current status ${account.status}`);
        }
    }
}