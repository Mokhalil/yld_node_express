import {UniqueEntityID} from "@mokhal/node-ddd-toolkit-for-express";
import {IAccountsRepository} from "../IAccountsRepository";
import {Account} from "../../models/Account";
import okta from "@okta/okta-sdk-nodejs";
import {OktaApiError} from "@okta/okta-sdk-nodejs/src/types/api-error";
import {oktaModels} from "../../../../shared/infra/okta/models/AccountDto";
import {oktaAccountMap} from "../../mappers/OktaAccountMap";

export class AccountsRepository implements IAccountsRepository {
    _service: okta.Client;

    constructor(auth: okta.Client) {
        this._service = auth;
    }

    activateAccount(id: UniqueEntityID): Promise<void> {
        return Promise.resolve(undefined);
    }

    async getAccountById(id: UniqueEntityID): Promise<Account> {
        try {
            const oktaAccount: oktaModels.OktaAccount = await this._service.getUser(id.toString()) as oktaModels.OktaAccount;
            const groups = this._service.listUserGroups(id.toString())
            await groups.each((item) => oktaAccount.groups.push(item.profile.name));
            const account = oktaAccountMap.toDomain(oktaAccount)
            return account!
        } catch (error: OktaApiError | any) {
            throw new Error(error.errorSummary ? error.errorSummary : `error retrieving account ${id} from okta`)
        }
    }

    save(account: Account): Promise<void> {
        return Promise.resolve(undefined);
    }

}