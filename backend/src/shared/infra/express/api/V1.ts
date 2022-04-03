import express from 'express'
import {accountsRouter} from "../../../../modules/accounts/infra/http/routes/accounts";

const v1Router = express.Router();

v1Router.get('/', (req, res) => {
    return res.json({ message: "Yo! we're up1" });
})
v1Router.use('/accounts',accountsRouter);

export { v1Router }