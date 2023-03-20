const express = require('express')

import * as dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
export const app = express()
const router = require('./routes')

app.set('port', process.env.PORT)

// For parsing application/json
app.use(express.json());

app.use(router)
