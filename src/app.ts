import 'reflect-metadata';
const express = require('express')
const cors = require('cors')

import * as dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
export const app = express()
const router = require('./routes')

app.set('port', process.env.PORT)

// For parsing application/json
app.use(cors('*'))
app.use(express.json())

app.use(router)
