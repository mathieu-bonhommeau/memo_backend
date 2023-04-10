import InitDb from './InitDb'

try {
    ;(async () => {
        const res = await InitDb.init()
        if (res) {
            return console.log('DB OK !')
        }
        throw new Error('Init DB Failed !')
    })()
} catch (err) {
    console.log(err)
}
