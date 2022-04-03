import {IAccountsRepository} from "../../repos/IAccountsRepository";
import {AccountsRepository} from "../../repos/implementation/AccountsRepository";
import {client} from "../../../../shared/infra/okta/client";
import {CreateAccountUseCase} from "./createAccount";
import {CreateAccountController} from "./createAccountController";

const repo: IAccountsRepository = new AccountsRepository(client);
const useCase = new CreateAccountUseCase(repo);
export const createAccountController = new CreateAccountController(useCase);