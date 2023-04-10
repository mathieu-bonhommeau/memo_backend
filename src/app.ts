import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import router from './routes'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
import DependencyContainer from './_config/DependencyInjection'
import * as process from "process";
if (process.env.NODE_ENV === 'test' && process.env.CONTEXT === 'unit') {
    DependencyContainer.initForUnitTest()
}
if (process.env.NODE_ENV !== 'test' ||
    (process.env.NODE_ENV === 'test' && process.env.CONTEXT !== 'unit')) {
    DependencyContainer.init()
}
export const app = express()

app.set('port', process.env.PORT)

// For parsing application/json
app.use(cors('*'))
app.use(express.json())

app.use(router)
