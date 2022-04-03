import {oktaModels} from "../../../shared/infra/okta/models/AccountDto";
import OktaAccount = oktaModels.OktaAccount;
import {Account, AccountProps} from "../models/Account";
import {UniqueEntityID} from "@mokhal/node-ddd-toolkit-for-express";

export  class oktaAccountMap {
    public static toDomain(model:OktaAccount):Account|undefined{
        const props:AccountProps={
            firstName : model.profile.firstName,
            lastname: model.profile.lastName,
            email: model.profile.email,
            login:model.profile.login,
            mobile:model.profile.mobilePhone,
            groups: model.groups,
            status: model.status.toString()
        }
        const accountOrError = Account.create(props,new UniqueEntityID(model.id))
        if(accountOrError.isFailure)
            console.log(accountOrError.error)
        return accountOrError.isSuccess? accountOrError.getValue():undefined
    }
}