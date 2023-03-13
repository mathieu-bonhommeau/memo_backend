const express = require('express')

import * as dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
export const app = express()
const router = require('./routes')

app.set('port', process.env.PORT)
app.use(router)
console.log(process.env)
app.listen(app.get('port'), () => {
    console.log(`Server is listening on PORT ${app.get('port')}`)
})

