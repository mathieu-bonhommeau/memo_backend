import { app } from './app.js'

app.listen(app.get('port'), () => {
    console.log(`Server is listening on PORT ${app.get('port')}`)
})
