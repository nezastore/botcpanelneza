require("./config")
const { makeWASocket, BufferJSON, initInMemoryStore,extractMessageContent, makeInMemoryStore, proto, delay, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, jidDecode, areJidsSameUser, PHONENUMBER_MCC, WA_DEFAULT_EPHEMERAL, relayMessage, getContentType, generateWAMessage, generateWAMessageContent, generateForwardMessageContent, generateWAMessageFromContent, makeCacheableSignalKeyStore, mimetype, Browsers, downloadContentFromMessage } = require("@whiskeysockets/baileys")
const fs = require("fs")
// let db_welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
// let db_left = JSON.parse(fs.readFileSync('./database/left.json'))

const useCODE = process.argv.includes("--useCODE")
const pino = require("pino")
const CFonts = require("cfonts");
const nodeCache = require("node-cache")
const chalk = require("chalk")
const Ncache = new nodeCache();

//——————————————————————————[ BAGIAN CFONTS ]——————————————————————————//
CFonts.say ("NEZA", {
    font: 'chrome',
    align: 'left',
    gradient: ["blue", "magenta"],
});

//——————————————————————————[ BAGIAN CONNECTION ]——————————————————————————//
async function connectToWhatsapp() {
 const store = makeInMemoryStore({ logger: pino().child({ level: "fatal"})})
 const { state,saveCreds } = await useMultiFileAuthState('./databot/session')
 const { version,isLatest } = await fetchLatestBaileysVersion()
 
const connectionOptions = {
    version,
    auth: state,
    isLatest: true,
    emitOwnEvents: true, 
    fireInitQueries: false, 
    printQRInTerminal: !useCODE,
    msgRetryCounterCache: Ncache,
    logger: pino({ level: "fatal" }),
    browser: Browsers.macOS("Edge"),
    generateHighQualityLinkPreview: true
}

const baseapenbotz = makeWASocket(connectionOptions)
store.bind(baseapenbotz.ev)

store.readFromFile('./databot/store.json')
setTimeout(() => {
store.writeToFile('./databot/store.json')
}, 8000)
//——————————————————————————[ BAGIAN PAIRING CODE ]——————————————————————————//
if (useCODE && !baseapenbotz.authState.creds.registered) {
        const question = pertanyaan =>
            new Promise(resolve => {
                const readline = require("readline").createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                readline.question(pertanyaan, answer => {
                    resolve(answer);
                    readline.close();
                });
            });
            
        setTimeout(async function () {
          let numb = await question("Masukan Nomor Dengan Awalan 628: +")
            const pairingCode = await baseapenbotz.requestPairingCode(numb);
           console.log("Code Untuk Terhubung Dengan Bot: " + pairingCode)
        }, 3000);
    }
    
    baseapenbotz.ev.on("creds.update", saveCreds);
    baseapenbotz.ev.on("connection.update", ({ connection, lastDisconnect }) => {
        if (connection === "open") {
          if(baseapenbotz.user) {
            console.log("SCRIPT BY NezaFvnky\nBASE ORI : APEN STORE\nYoutube : APEN NezaFvnky")
          }
           console.log((chalk.red("[ Connection ]")) + (chalk.blue(" => ")) + (chalk.green(`${baseapenbotz.user.id.split(":")[0]}@s.whatsapp.net\n`)))
            let id = `${baseapenbotz.user.id.split(":")[0]}@s.whatsapp.net`
            baseapenbotz.sendMessage(id, {
              text: `BERHASIL TERKONEKSI DENGAN NezaFvnky`, contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.NewsletterJid,
                  serverMessageId: 125,
                  newsletterName: 'INFO PANEL NEZASTORE'
                }
              }
            }, {
              quoted: {
                key: {
                  participant: "0@s.whatsapp.net",
                  remoteJid: "status@broadcast",
                  fromMe: false,
                  id: ""
                },
                message: {
                  conversation: 'Bot WhatsApp By NezaFvnky'
                }
              }
            })
        }
        if (connection === "close") {
            const { Boom } = require ("@hapi/boom")
           let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if(reason === DisconnectReason.badSession) {
   console.log(require('chalk').italic.red(`TERJADI BAD SESSION, HAPUS FOLDER DATABOT & KONEKSI ULANG MENGGUNAKAN PAIRING CODE`))
    process.exit()
} else if(reason === DisconnectReason.connectionClosed) {
console.log(require('chalk').italic.red(`Connectiom Closed, reconnecting. . .`))
connectToWhatsapp ()
} else if(reason === DisconnectReason.connectionLost) {
    console.log(require('chalk').italic.red(`Connection Lost from Server, reconnecting. . .`))
 connectToWhatsapp()
} else if(reason === DisconnectReason.connectionReplaced) {
   console.log(require('chalk').italic.red(`Connection Replaced, Please Delete Folder Session Opened & Restart Bot`))
    process.exit()
} else if(reason === DisconnectReason.loggedOut) {
    console.log(require('chalk').italic.red(`Device Logged Out, Please Delete Folder Session & Restart Bot`))
    process.exit()
} else if(reason === DisconnectReason.restatRequired || reason === DisconnectReason.timedOut) {
    console.log(require('chalk').italic.red(`Restart Required`))
    connectToWhatsapp()
}
        }
    });
        baseapenbotz.ev.process(async (events) => {
             if (events[`messages.upsert`]) {
           const upsert= events[`messages.upsert`]
                for(let msg of upsert.messages) {
            if(!msg.message) {
                return
            }
                           require("./apen")(baseapenbotz, msg, store)
        }
    }
})

baseapenbotz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
  }


    //——————————————————[ BAGIAN MODE PUBLIC / SELF ]—————————————————————//
    baseapenbotz.public = true; // ubah ke false untuk menjadi mode self //
    //——————————————————[ BAGIAN MODE PUBLIC / SELF ]—————————————————————// 
    
    baseapenbotz.ev.on('creds.update', saveCreds)
    return baseapenbotz
    }
        connectToWhatsapp()
