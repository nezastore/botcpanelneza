const { default: axios } = require('axios')
const { format } = require('path')

require('./config')
require('./all/pricelist')
module.exports = async (baseapenbotz, msg, store) => {
    try {
   const {
     downloadMediaMessage
   } = require("@whiskeysockets/baileys")
   const Tiktok = require('@xct007/tiktok-scraper').Tiktok
   const fs = require("fs")
   //—————————————————————[ BAGIAN CONST ]—————————————————————//
    const type = Object.keys(msg.message)[0]
    const body = type === "conversation" ? msg.message.conversation : type === "extendedTextMessage" ? 
    msg.message.extendedTextMessage.text : type === "imageMessage" ? 
    msg.message.imageMessage.caption : type === "videoMessage" ?
    msg.message.videoMessage.caption : ''
    const prefix = global.prefa
    const isCmd = body.startsWith(global.prefa)
    const command = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
    const fromMe = msg.key.remoteJid
    const sender = msg.key.fromMe ? (baseapenbotz.user.id.split(':')[0]+'@s.whatsapp.net' || baseapenbotz.user.id) : (msg.key.participant || msg.key.remoteJid)
    const senderNumber = sender.split('@')[0]
    const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))
    const contacts = JSON.parse(fs.readFileSync('./database/contacts.json'))
    const isOwner = ownerNumber.includes(senderNumber) || global.ownerNumber || "6283129011845" || global.creatorNumber
    const isContacts = contacts.includes(sender)
    const isGroup = fromMe.endsWith('@g.us')
    const args = body.trim().split(/ +/).slice(1)
    const text = q = args.join(" ")
    var budy = (typeof text == 'string' ? text : '')
    const groupMetadata = isGroup ? await baseapenbotz.groupMetadata(fromMe) : "";
    const participants = isGroup ? await groupMetadata.participants : "";
    const groupAdmins = isGroup
      ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
      : "";
    const isAdmins = isGroup ? groupAdmins.includes(sender) : false
    const isBotAdmins = isGroup ? groupAdmins.includes(global.botNumber) : false;
   //—————————————————————[ BAGIAN CONST ]—————————————————————//


       // db seler & isSeler //
    const db_selerNoUnli = JSON.parse(fs.readFileSync("./database/reselerNoUnli.json"))
    const db_selerUnli = JSON.parse(fs.readFileSync("./database/reselerUnli.json"))
    const isSelerNoUnli = db_selerNoUnli.includes(senderNumber + "@s.whatsapp.net")
    const isSelerUnli = db_selerUnli.includes(senderNumber + "@s.whatsapp.net")
    // db seler & isSeler //
    
   async function Createpanelpterodactyl(username, memo, cpu, disk) {
      let fetch = require('node-fetch')
      let name = username 
      let egg = global.eggsnya
      let loc = global.location
    let email = username + "@NezaFvnky.co"
    akunlo = "https://telegra.ph/file/c488493756317874ed1b3.jpg" 
    let password = username + ' 10'
    let f = await fetch(domain + "/api/application/users", {
    "method": "POST",
    "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer " + apikey
    },
    "body": JSON.stringify({
    "email": email,
    "username": username,
    "first_name": username,
    "last_name": username,
    "language": "en",
    "password": password
    })
    })
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
    "method": "GET",
    "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer " + apikey
    }
    })
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup
    
    let f3 = await fetch(domain + "/api/application/servers", {
    "method": "POST",
    "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer " + apikey,
    },
    "body": JSON.stringify({
    "name": name,
    "description": " ",
    "user": user.id,
    "egg": parseInt(egg),
    "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
    "startup": startup_cmd,
    "environment": {
    "INST": "npm",
    "USER_UPLOAD": "0",
    "AUTO_UPDATE": "0",
    "CMD_RUN": "npm start"
    },
    "limits": {
    "memory": memo,
    "swap": 0,
    "disk": disk,
    "io": 500,
    "cpu": cpu
    },
    "feature_limits": {
    "databases": 5,
    "backups": 5,
    "allocations": 1
    },
    deploy: {
    locations: [parseInt(loc)],
    dedicated_ip: false,
    port_range: [],
    },
    })
    })
    let res = await f3.json()
    if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
    let server = res.attributes
    let txPanel0 = `────╼ [ Data Login Panel Anda ] ╾────
user id : ${user.id}
status : user
ram : ${memo}
cpu : ${cpu}
disk : ${disk}
name : ${user.first_name}
username : ${user.username}
password : ${password}
email : ${user.email}
web login : ${global.domain}
━──━──━───━───━───━───━──━
> Bot By NezaFvnky`
return txPanel0
    }

      // function if only //
    
    function SelerNoUnliOnly() {
      return reply("Maaf Kamu Belum Terdaftar Sebagai Reseler Panel Kak NezaFvnky\nJika Terjadi Kesalahan Harap Segera Laporkan Ke Kak NezaFvnky")
          }
    function SelerUnliOnly() {
      return reply("Maaf Kamu Belum Terdaftar Sebagai Reseler Panel Yang Bisa Create Unli Di Kak NezaFvnky\nJika Terjadi Kesalahan Harap Segera Laporkan Ke Kak NezaFvnky")
           }
    function OwnerOnly() {
     return reply(`Maaf Kak @${senderNumber} Kamu Bukan Owner Ku Dan Fitur Ini Khusus Owner Ku\nMau Sewa Bot Ini? Chat wa.me//6285235028177`)
          }
          
   // function if only //

   //—————————————————————[ BAGIAN BOT-INFO ]—————————————————————//
   
   const { runtime,sleep } = require("./all/function")
   const hariini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
   
   //—————————————————————[ BATAS BOT-INFO ]—————————————————————//
   if(!baseapenbotz.public) {
     if(!isOwner) return;
   }
   //—————————————————————[ BAGIAN CONSOLE ]—————————————————————//
     if (!isGroup && isCmd) {     
       baseapenbotz.sendPresenceUpdate('recording', fromMe)
    console.log(require("chalk").black(require("chalk").bgGreen(`Menerima Command ${prefix+command} `)),
    require("chalk").black(require("chalk").bgWhite(`Dari ${msg.pushName}`)))
     } else if(isGroup && isCmd) {
      baseapenbotz.sendPresenceUpdate('composing', fromMe)
     console.log(require("chalk").black(require("chalk").bgGreen(`Menerima Command ${prefix+command} `)),
    require("chalk").black(require("chalk").bgWhite(`Dari Group`)))
     }
   //—————————————————————[ BAGIAN CONSOLE ]—————————————————————//
   //—————————————————————[ FUNCTION REPLY ]—————————————————————//
const replyV1 = (text) => {
  baseapenbotz.sendMessage(fromMe, {
    text: text
  }, {
    quoted: msg
  })
}

if(body === 'p') return replyV1('ya')

const reply_new = (text) => {
  baseapenbotz.sendMessage(fromMe, { text: text,
  contextInfo: {
      externalAdReply: {
        title: global.ownerName,
        body: `${global.ownerName}`,
        thumbnailUrl: "https://graph.org/file/4bc227a8ddc6066504cda.jpg",
        sourceUrl: 'https://wa.me//6283129011845',
        mediaType: 1,
        renderLargerThumbnail: false,
      }
      }
  }, { quoted : {
  key : {
  remoteJid : "status@broadcast", 
  from : false, 
  participant: "0@s.whatsapp.net"
  }, 
  message : {
  listResponseMessage : {
  title : `Sc By ${global.ownerName}`, 
         }
       }
     }
   })
 }

 const reply = (text) => {
  baseapenbotz.sendMessage(fromMe, {
    text: text, contextInfo: {
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.NewsletterJid,
        serverMessageId: 100,
        newsletterName: ''
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

if(body === 'tes' || body === 'tess') return reply(`*Bot Sedang Aktif✅*\n_dengan waktu aktif : ${runtime(process.uptime())}_`)
   
   //—————————————————————[ FUNCTION REPLY ]—————————————————————//
   
   //—————————————————————[ ALL MENU BOT ]—————————————————————//

switch(command) {
  case 'menu':{
  reply(`*BOT CREATE PANEL SIMPLE V2*
> Script By : NezaFvnky

*⚌⚌⚌ [ OWNER MENU ] ⚌⚌⚌*
⚘ .addprem [ 628xx ]
⚘ .delprem [ 628xx ]
⚘ .addpremunli [ 628xx ]
⚘ .delpremunli [ 628xx ]

*⚌⚌⚌ [ CREATE PANEL MENU ] ⚌⚌⚌*
⚘ .listsrv
⚘ .listusr
⚘ .delsrv [id ]
⚘ .delusr [ id ]
⚘ .addusr [ username ]
⚘ .1gb [ username,628xx ]
⚘ .2gb [ username,628xx ]
⚘ .3gb [ username,628xx ]
⚘ .4gb [ username,628xx ]
⚘ .5gb [ username,628xx ]
⚘ .6gb [ username,628xx ]
⚘ .7gb [ username,628xx ]
⚘ .8gb [ username,628xx ]
⚘ .9gb [ username,628xx ]
⚘ .10gb [ username,628xx ]
⚘ .unligb [ username,628xx ]
⚘ .tutorial ( cara membuat panel )

> Jika Menemukan Error Segera Chat NezaFvnky`)
  }
  break
  case 'addprem':{
                          if(!isOwner) return reply(`Maaf Kak ${msg.pushName} Kamu Bukan Owner`)
                          let nomor = q.split("|")[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                          if(!nomor) return reply(`Masukan Nomor Yang Mau Dijadikan Reseler No Unli`)
                          let cek = await baseapenbotz.onWhatsApp(nomor)
                          if(cek.length == 0) return reply('Masukan Nomor WhatsApp Yang Terdaftar Di WhatsApp')
                          db_selerNoUnli.push(nomor)
                          fs.writeFileSync('./database/reselerNoUnli.json', JSON.stringify(db_selerNoUnli))
                          reply(`Nomor ${nomor} Kini Menjadi Reseler No Unli`)
                          }
                          break
                          case 'delprem':{
                          if(!isOwner) return reply(`Maaf Kak ${msg.pushName} Kamu Bukan Owner`)
                          let nomor = q.split("|")[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                          if(!nomor) return reply(`Masukan Nomor Yang Mau Dihapus Dari Reseler No Unli`)
                          unp = db_selerNoUnli.indexOf(nomor)
                          db_selerNoUnli.splice(unp, 1)
                          fs.writeFileSync('./database/reselerNoUnli.json', JSON.stringify(db_selerNoUnli))
                          reply(`Nomor ${nomor} Berhasil Dihapus Dari Reseler Panel No Unli`)
                          }
                          break
                          case 'addpremunli':{
                            if(!isOwner) return reply(`Maaf Kak ${msg.pushName} Kamu Bukan Owner`)
                            let nomor = q.split("|")[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                            if(!nomor) return reply(`Masukan Nomor Yang Mau Dijadikan Reseler Unli`)
                            let cek = await baseapenbotz.onWhatsApp(nomor)
                            if(cek.length == 0) return reply('Masukan Nomor WhatsApp Yang Terdaftar Di WhatsApp')
                              db_selerNoUnli.push(nomor)
                            fs.writeFileSync('./database/reselerNoUnli.json', JSON.stringify(db_selerNoUnli))
                              db_selerUnli.push(nomor)
                            fs.writeFileSync('./database/reselerUnli.json', JSON.stringify(db_selerUnli))
                            reply(`Nomor ${nomor} Kini Menjadi Reseler Unli & Reseler Biasa`)
                            }
                            break
                            case 'delpremunli':{
                            if(!isOwner) return reply(`Maaf Kak ${msg.pushName} Kamu Bukan Owner`)
                            let nomor = q.split("|")[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                            if(!nomor) return reply(`Masukan Nomor Yang Mau Dihapus Dari Reseler Unli`)
                            unp = db_selerUnli.indexOf(nomor)
                            db_selerUnli.splice(unp, 1)
                            fs.writeFileSync('./database/reselerUnli.json', JSON.stringify(db_selerUnli))
                            reply(`Nomor ${nomor} Berhasil Dihapus Dari Reseler Panel Unli, Tapi Masih Bisa Untuk Create Panle Ram Biasa`)
                            }
                            break
                            case 'tutorial': {
   if(!isSelerUnli && !isSelerNoUnli) return replyV1('Maaf Kamu Bukan Reseler Kak NezaFvnky')
   reply('*Cara Membuat Panel*\n_<contoh: .1gb username,nomor>_')
   }
   break
   case '1gb':{
   if(!isSelerNoUnli) return SelerNoUnliOnly()
   let username = q.split(',')[0]
   let nomor = q.split(',')[1]
   if(!nomor) return reply('Masukan Nomor Tujuan Dengan Awalan 628')
   if(!username) return reply('Masukan Username Panel Anda')
   let p = await Createpanelpterodactyl(username, '1024', '40', '1024')
   reply('*Sedang Membuat Server*\n_sedang membuat user dan server panel_')
   await sleep(4000)
   baseapenbotz.sendMessage(nomor + "@s.whatsapp.net", {
     text: p
   })
   reply(`*BERHASIL MEMBUAT USER & SERVER PANEL*\n_username & password telah dikirim ke nomor tujuan_`)
   }
   break
   case '2gb':{
   if(!isSelerNoUnli) return SelerNoUnliOnly()
   let username = q.split(',')[0]
   let nomor = q.split(',')[1]
   if(!nomor) return reply('Masukan Nomor Tujuan Dengan Awalan 628')
   if(!username) return reply('Masukan Username Panel Anda')
   let p = await Createpanelpterodactyl(username, '2048', '65', '2048')
   reply('*Sedang Membuat Server*\n_sedang membuat user dan server panel_')
   await sleep(4000)
   baseapenbotz.sendMessage(nomor + "@s.whatsapp.net", {
     text: p
   })
   reply(`*BERHASIL MEMBUAT USER & SERVER PANEL*\n_username & password telah dikirim ke nomor tujuan_`)
   }
   break
   case '3gb':{
   if(!isSelerNoUnli) return SelerNoUnliOnly()
   let username = q.split(',')[0]
   let nomor = q.split(',')[1]
   if(!nomor) return reply('Masukan Nomor Tujuan Dengan Awalan 628')
   if(!username) return reply('Masukan Username Panel Anda')
   let p = await Createpanelpterodactyl(username, '3024', '95', '3024')
   reply('*Sedang Membuat Server*\n_sedang membuat user dan server panel_')
   await sleep(4000)
   baseapenbotz.sendMessage(nomor + "@s.whatsapp.net", {
     text: p
   })
   reply(`*BERHASIL MEMBUAT USER & SERVER PANEL*\n_username & password telah dikirim ke nomor tujuan_`)
   }
   break
   case '4gb':{
   if(!isSelerNoUnli) return SelerNoUnliOnly()
   let username = q.split(',')[0]
   let nomor = q.split(',')[1]
   if(!nomor) return reply('Masukan Nomor Tujuan Dengan Awalan 628')
   if(!username) return reply('Masukan Username Panel Anda')
   let p = await Createpanelpterodactyl(username, '4025', '135', '4025')
   reply('*Sedang Membuat Server*\n_sedang membuat user dan server panel_')
   await sleep(4000)
   baseapenbotz.sendMessage(nomor + "@s.whatsapp.net", {
     text: p
   })
   reply(`*BERHASIL MEMBUAT USER & SERVER PANEL*\n_username & password telah dikirim ke nomor tujuan_`)
   }
   break
   case '5gb':{
   if(!isSelerNoUnli) return SelerNoUnliOnly()
   let username = q.split(',')[0]
   let nomor = q.split(',')[1]
   if(!nomor) return reply('Masukan Nomor Tujuan Dengan Awalan 628')
   if(!username) return reply('Masukan Username Panel Anda')
   let p = await Createpanelpterodactyl(username, '5025', '150', '5025')
   reply('*Sedang Membuat Server*\n_sedang membuat user dan server panel_')
   await sleep(4000)
   baseapenbotz.sendMessage(nomor + "@s.whatsapp.net", {
     text: p
   })
   reply(`*BERHASIL MEMBUAT USER & SERVER PANEL*\n_username & password telah dikirim ke nomor tujuan_`)
   }
   break
   case '6gb':{
   if(!isSelerNoUnli) return SelerNoUnliOnly()
   let username = q.split(',')[0]
   let nomor = q.split(',')[1]
   if(!nomor) return reply('Masukan Nomor Tujuan Dengan Awalan 628')
   if(!username) return reply('Masukan Username Panel Anda')
   let p = await Createpanelpterodactyl(username, '6025', '165', '6025')
   reply('*Sedang Membuat Server*\n_sedang membuat user dan server panel_')
   await sleep(4000)
   baseapenbotz.sendMessage(nomor + "@s.whatsapp.net", {
     text: p
   })
   reply(`*BERHASIL MEMBUAT USER & SERVER PANEL*\n_username & password telah dikirim ke nomor tujuan_`)
   }
   break
   case '7gb':{
   if(!isSelerNoUnli) return SelerNoUnliOnly()
   let username = q.split(',')[0]
   let nomor = q.split(',')[1]
   if(!nomor) return reply('Masukan Nomor Tujuan Dengan Awalan 628')
   if(!username) return reply('Masukan Username Panel Anda')
   let p = await Createpanelpterodactyl(username, '7025', '185', '7025')
   reply('*Sedang Membuat Server*\n_sedang membuat user dan server panel_')
   await sleep(4000)
   baseapenbotz.sendMessage(nomor + "@s.whatsapp.net", {
     text: p
   })
   reply(`*BERHASIL MEMBUAT USER & SERVER PANEL*\n_username & password telah dikirim ke nomor tujuan_`)
   }
   break
   case '8gb':{
   if(!isSelerNoUnli) return SelerNoUnliOnly()
   let username = q.split(',')[0]
   let nomor = q.split(',')[1]
   if(!nomor) return reply('Masukan Nomor Tujuan Dengan Awalan 628')
   if(!username) return reply('Masukan Username Panel Anda')
   let p = await Createpanelpterodactyl(username, '8025', '195', '8025')
   reply('*Sedang Membuat Server*\n_sedang membuat user dan server panel_')
   await sleep(4000)
   baseapenbotz.sendMessage(nomor + "@s.whatsapp.net", {
     text: p
   })
   reply(`*BERHASIL MEMBUAT USER & SERVER PANEL*\n_username & password telah dikirim ke nomor tujuan_`)
   }
   break
   case '9gb':{
   if(!isSelerNoUnli) return SelerNoUnliOnly()
   let username = q.split(',')[0]
   let nomor = q.split(',')[1]
   if(!nomor) return reply('Masukan Nomor Tujuan Dengan Awalan 628')
   if(!username) return reply('Masukan Username Panel Anda')
   let p = await Createpanelpterodactyl(username, '9125', '205', '9125')
   reply('*Sedang Membuat Server*\n_sedang membuat user dan server panel_')
   await sleep(4000)
   baseapenbotz.sendMessage(nomor + "@s.whatsapp.net", {
     text: p
   })
   reply(`*BERHASIL MEMBUAT USER & SERVER PANEL*\n_username & password telah dikirim ke nomor tujuan_`)
   }
   break
   case '10gb':{
   if(!isSelerNoUnli) return SelerNoUnliOnly()
   let username = q.split(',')[0]
   let nomor = q.split(',')[1]
   if(!nomor) return reply('Masukan Nomor Tujuan Dengan Awalan 628')
   if(!username) return reply('Masukan Username Panel Anda')
   let p = await Createpanelpterodactyl(username, '10240', '225', '10240')
   reply('*Sedang Membuat Server*\n_sedang membuat user dan server panel_')
   await sleep(4000)
   baseapenbotz.sendMessage(nomor + "@s.whatsapp.net", {
     text: p
   })
   reply(`*BERHASIL MEMBUAT USER & SERVER PANEL*\n_username & password telah dikirim ke nomor tujuan_`)
   }
   break
   case 'unligb':{
   if(!isSelerUnli) return SelerUnliOnly()
   let username = q.split(',')[0]
   let nomor = q.split(',')[1]
   if(!nomor) return reply('Masukan Nomor Tujuan Dengan Awalan 628')
   if(!username) return reply('Masukan Username Panel Anda')
   let p = await Createpanelpterodactyl(username, '0', '0', '0')
   reply('*Sedang Membuat Server*\n_sedang membuat user dan server panel_')
   await sleep(4000)
   baseapenbotz.sendMessage(nomor + "@s.whatsapp.net", {
     text: p
   })
   reply(`*BERHASIL MEMBUAT USER & SERVER PANEL*\n_username & password telah dikirim ke nomor tujuan_`)
   }
   break
}
    } catch (e) {
      let er = (require('util').format(e))
      baseapenbotz.sendMessage(msg.key.remoteJid, { text: er }, {
          quoted: msg
      })
        }
  }

  let file = require.resolve(__filename)
  fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
