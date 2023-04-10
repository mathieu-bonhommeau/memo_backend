import InitDb from './InitDb'

try {
    ;(async () => {
        const res = await InitDb.seed()
        if (res) {
            return console.log('DB POPULATE !')
        }
        throw new Error('Populate DB Failed !')
    })()
} catch (err) {
    console.log(err)
}
