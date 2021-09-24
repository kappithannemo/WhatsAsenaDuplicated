const { WAConnection } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

require('./hypermod.js')
nocache('./hypermod.js', module => console.log(`'${module}' Updated!`))
nocache('./welcome.js', module => console.log(`'${module}' Updated!`))

async function starts() {
    const hypermod = new WAConnection()
    //WWEB
    hypermod.version = [2, 2119, 6]
    hypermod.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(`[ ${time} ] Scan this qr code`)
    })

    hypermod.on('credentials-updated', () => {
        const authInfo = hypermod.base64EncodedAuthInfo()
        console.log(`credentials updated!`)
    
        fs.writeFileSync('./QRhyper.json', JSON.stringify(authInfo, null, '\t'))
    })
    
    fs.existsSync('./QRhyper.json') && hypermod.loadAuthInfo('./QRhyper.json')
    
    hypermod.connect();
	
	hypermod.on('group-participants-update', async (anu) => {
        require('./welcome.js')(hypermod, anu)
    })
    
	hypermod.on('group-participants-update', async (den) => {
        require('./welcome.js')(hypermod, den)
    })
    
	hypermod.on('message-new', async (mek) => {
        require('./hypermod.js')(hypermod, mek)
    })
    }
    
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()