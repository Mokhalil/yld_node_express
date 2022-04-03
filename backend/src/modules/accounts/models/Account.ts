import {AggregateRoot, Either, Guard, GuardArgument, ok, Result} from "@mokhal/node-ddd-toolkit-for-express";
import {UserStatus} from "../../../shared/infra/okta/models/AccountDto";
import {ActivateAccountErrors} from "../useCases/activateAccount/ActivateAccountErrors";
import {AccountActivated} from "./events/AccountActivated";
import {UniqueEntityID} from "@mokhal/node-ddd-toolkit-for-express/src/domain/UniqueEntityID";
import {AccountCreated} from "./events/AccountCreated";


export interface AccountProps {
    id: string,
    firstName: string,
    lastname: string,
    login: string,
    email: string,
    groups?: string[],
    mobile: string,
    status? : string
}

export type ActivateAccountResult = Either<ActivateAccountErrors.AccountIsNotStaged|Result<any>, Result<void>>

export class Account extends AggregateRoot<AccountProps> {
    private constructor(props: AccountProps, id?: UniqueEntityID) {
        super(props, id);

    }

    public static create(props: AccountProps, id?: UniqueEntityID): Result<Account> {
        const guardArgs: GuardArgument[] = [
            {argument:props.email, argumentName:'email'},
            {argument:props.login, argumentName:'login'},
            {argument:props.firstName, argumentName:'firstName'},
            {argument:props.lastname, argumentName:'lastName'},
        ]

        const result = Guard.againstNullOrUndefinedBulk(guardArgs)
        if(!result.succeeded)
            return Result.fail(result.message!);
        const account = new Account(props);
        account.addDomainEvent(new AccountCreated(account))
        return Result.ok<Account>(account)
    }

    get isAdmin(): boolean {
        return false;
    }

    get isActivated(): boolean {
        return this.props.status === UserStatus.ACTIVE;
    }
    public activate():ActivateAccountResult{
        if(this.props.status !== UserStatus.STAGED)
            return fail(new ActivateAccountErrors.AccountIsNotStaged(this))
        this.addDomainEvent(new AccountActivated(this))
        return ok(Result.ok<void>())
    }

    get allowed(): boolean {
        return false;
    }

    get fullName():string{
        return `${this.props.firstName} ${this.props.lastname}`
    }

    get login(): string{
        return  this.props.login
    }

    get email(): string {
        return this.props.email
    }

    get mobile(): string{
        return  this.props.mobile
    }

    get status(): string|undefined{
        return this.props.status
    }

}