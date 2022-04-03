import {CreateAccountController} from "../../../useCases/createAccount/createAccountController";
import express from "express";
import {createAccountController} from "../../../useCases/createAccount";


const accountsRouter = express.Router();
accountsRouter.get('/', (req,res)=>createAccountController.execute(req,res))

export {
    accountsRouter
}