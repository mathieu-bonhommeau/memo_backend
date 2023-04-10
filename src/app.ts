import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import router from './routes'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
export const app = express()

app.set('port', process.env.PORT)

// For parsing application/json
app.use(cors('*'))
app.use(express.json())

app.use(router)
