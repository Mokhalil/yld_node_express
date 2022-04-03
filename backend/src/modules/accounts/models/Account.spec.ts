import {createMock} from "ts-auto-mock";
import {Account, AccountProps} from "./Account";
import faker from "@faker-js/faker";
import {UniqueEntityID} from "@mokhal/node-ddd-toolkit-for-express";

describe('Account',()=>{
    let mockAccountProps = createMock<AccountProps>({
        firstName:faker.name.firstName(),
        lastname:faker.name.lastName(),
        email:faker.internet.email(),
        login:faker.internet.email(),
        mobile:faker.phone.phoneNumber(),
    })
    beforeEach(()=>{
        mockAccountProps = createMock<AccountProps>({
            firstName:faker.name.firstName(),
            lastname:faker.name.lastName(),
            email:faker.internet.email(),
            login:faker.internet.email(),
            mobile:faker.phone.phoneNumber(),
        })
    })
    describe('create',()=>{
        it('should create account with correct props',()=>{
            const accountOrError = Account.create(mockAccountProps);
            expect(accountOrError.isSuccess).toBe(true);
            expect(accountOrError.isFailure).toBe(false);
        })
        it('should raise AccountCreated event when successful',()=>{
            const accountOrError = Account.create(mockAccountProps);
            expect(accountOrError.isSuccess).toBe(true);
            expect(accountOrError.getValue().domainEvents[0].getAggregateId()).toBe(accountOrError.getValue().id)
            expect(accountOrError.isFailure).toBe(false);
        })

        it('should return falsy with empty login',()=>{
            mockAccountProps.login='';
            const accountOrError = Account.create(mockAccountProps);
            expect(accountOrError.isSuccess).toBe(false);
            expect(accountOrError.isFailure).toBe(true);
        })

        it('should return falsy with empty email',()=>{
            mockAccountProps.email='';
            const accountOrError = Account.create(mockAccountProps);
            expect(accountOrError.isSuccess).toBe(false);
            expect(accountOrError.isFailure).toBe(true);
        })

        it('should return falsy with email != login',()=>{
            mockAccountProps.email=faker.internet.email();
            mockAccountProps.login=faker.internet.email();
            const accountOrError = Account.create(mockAccountProps);
            expect(accountOrError.isSuccess).toBe(false);
            expect(accountOrError.isFailure).toBe(true);
        })
    })
})