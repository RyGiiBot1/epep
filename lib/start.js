/*

♛ 𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊 ♛

★LOLHUMAN
★YOGI PW
★XZIYY API
★NODE MODULES
★LEXXY OFFICIAL
★ZHIRR API
★HADI OFFICIAL

*/
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const fetch = require('node-fetch')
const crypto = require('crypto')  
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64')
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./function')
const { color, bgcolor } = require('./color')
const { fetchJson, getBase64, kyun, createExif } = require('./fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./ytdl')
const { y2mate } = require('./y2mate');
const { y2mateA, y2mateV } = require('./y2mate.js')
const { webp2mp4File} = require('./webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

//Database
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var _registered = JSON.parse(fs.readFileSync('./storage/user.json'))

//=================================================//
banChats = false,
lolkey = setting.LolHuman
targetpc = '6285789004732'
owner = setting.Owner
ownerName = setting.OwnerName
fake = '© RyGiiXyzzz'
LexApi = setting.LexxyApi
xziyApi = setting.XziyApi
leysApi = setting.LeysApi
botName = setting.BotName
offline = false,
numbernye = '0'
waktu = '-'
blocked = []
alasan = '-'

var creator = '© RyGiiXyzzz'
img = fs.readFileSync('./stik/fake.jpeg')

//================================================================================//
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

//================================================================================//
module.exports = LexxyOFC = async (LexxyOFC, mek) => {	
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return

//================================================================================//
           
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType			
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()

//================================================================================//
                       
       const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '!'          	    
       
       body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		
//================================================================================//
           	
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = LexxyOFC.user.jid
		const botNumberss = LexxyOFC.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const isSelfNumber = [`${targetpc}@s.whatsapp.net`]
		const OwnerNumber = [`${owner}@s.whatsapp.net`]
		const isOwner = OwnerNumber.includes(sender)
		const totalchat = await LexxyOFC.chats.all()
		const timestampi = speed();
        const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
        const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
        const hour_now = moment().format('HH:mm:ss')
        const latensyi = speed() - timestampi
		const groupMetadata = isGroup ? await LexxyOFC.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? LexxyOFC.user.jid : LexxyOFC.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? LexxyOFC.user.name : conts.notify || conts.vname || conts.name || '-'

//================================================================================//
           
        //MESS
		mess = {
			wait: 'Otewe',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
			stick: 'bukan sticker itu:v',
			Iv: 'Linknya error:v'
			},
			only: {
			group: 'Khusus grup ngab',
			}
		    }
		
//================================================================================//
           
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            LexxyOFC.sendMessage(from, teks, text, {quoted: mek})
        }
        const sendMess = (hehe, teks) => {
            LexxyOFC.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? LexxyOFC.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : LexxyOFC.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
const fakethumb = (teks, yes) => {
            LexxyOFC.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }        
const fakestatus = (teks) => {
            LexxyOFC.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/fake.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        
const fakegroup = (teks) => {
            LexxyOFC.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/fake.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
          
//================================================================================//
//Jam Hari Tanggal Tahun
var datw = new Date();
var tahun = datw.getFullYear();
  var bulan = datw.getMonth();
    var tanggal = datw.getDate();
      var hari = datw.getDay();
        var jams = datw.getHours();
          var menit = datw.getMinutes();
            var detik = datw.getSeconds();
switch(hari) {
          case 0: hari = "Minggu"; break;
         case 1: hari = "Senin"; break;
       case 2: hari = "Selasa"; break;
     case 3: hari = "Rabu"; break;
   case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
case 6: hari = "Sabtu"; break;
        }
switch(bulan) {
case 0: bulan = "Januari"; break;
        case 1: bulan = "Februari"; break;
                 case 2: bulan = "Maret"; break;
                          case 3: bulan = "April"; break;
                                   case 4: bulan = "Mei"; break;
                                            case 5: bulan = "Juni"; break;
                                                     case 6: bulan = "Juli"; break;
                                                              case 7: bulan = "Agustus"; break;
                                                                       case 8: bulan = "September"; break;
                                                                                case 9: bulan = "Oktober"; break;
                                                                                         case 10: bulan = "November"; break;
                                                                                                  case 11: bulan = "Desember"; break;
        }
switch(jams){
case 0: jams = 'Selamat Malam 🌃'; break;
case 1: jams = 'Selamat Malam 🌃'; break;
case 2: jams = 'Selamat Malam 🌃'; break;
case 3: jams = 'Selamat Pagi 🎑'; break;
case 4: jams = 'Selamat Pagi 🎑'; break; 
case 5: jams = 'Selamat Pagi 🎑'; break;
case 6: jams = 'Selamat Pagi 🎑'; break;
case 7: jams = 'Selamat Pagi 🎑'; break;
case 8: jams = 'Selamat Pagi 🏞️'; break;
case 9: jams = 'Selamat Pagi 🏞️'; break;
case 10: jams = 'Selamat Pagi 🏞️'; break;
case 11: jams = 'Selamat Siang 🏞️'; break; 
case 12: jams = 'Selamat Siang 🏞️'; break;
case 13: jams = 'Selamat Siang 🏞️'; break;
case 14: jams = 'Selamat Siang 🏞️'; break;
case 15: jams = 'Selamat Sore 🌅'; break;
case 16: jams = 'Selamat Sore 🌅'; break;
case 17: jams = 'Selamat Sore 🌅'; break;
case 18: jams = 'Selamat Malam 🌌'; break; 
case 19: jams = 'Selamat Malam 🌌'; break;
case 20: jams = 'Selamat Malam 🌌'; break;
case 21: jams = 'Selamat Malam 🌌'; break;
case 22: jams = 'Selamat Malam 🌌'; break; 
case 23: jams = 'Selamat Malam 🌌'; break;
			}
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;

const flexx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `© RyGiiXyzzz`,
                 "title": `© RyGiiXyzzz`,
                 'jpegThumbnail': fs.readFileSync("./stik/fake.jpeg"),
                        }
	                  } 
                     }
function _0x8bc0(){var _0x51acb=['𝑆𝑐𝑟𝑖𝑝𝑡\x20𝐵𝑎𝑠𝑒\x20𝐼𝑛𝑖\x20𝐷𝑖\x20𝐵𝑢𝑎𝑡\x20𝑂𝑙𝑒ℎ\x20𝐿𝑒𝑥𝑥𝑦\x20𝑂𝑓𝑓𝑖𝑐𝑖𝑎𝑙\x20𝐽𝑖𝑘𝑎\x20𝑀𝑎𝑢\x20𝑅𝑒𝑢𝑝𝑙𝑜𝑎𝑑\x20𝐴𝑡𝑎𝑢\x20𝑅𝑒𝑐𝑜𝑑𝑒\x20𝑇𝑜𝑙𝑜𝑛𝑔\x20𝐾𝑎𝑠𝑖ℎ\x20𝐾𝑟𝑒𝑑𝑖𝑡,\x20𝐾𝑎𝑠𝑖ℎ\x20𝐿𝑖𝑛𝑘\x20𝑌𝑜𝑢𝑇𝑢𝑏𝑒\x20𝑃𝑒𝑚𝑏𝑢𝑎𝑡\x20𝐴𝑔𝑎𝑟\x20𝑆𝑎𝑦𝑎\x20𝐿𝑒𝑏𝑖ℎ\x20𝑆𝑒𝑚𝑎𝑛𝑔𝑎𝑡\x20𝐿𝑎𝑔𝑖\x20𝑈𝑝𝑑𝑎𝑡𝑒\x20𝐵𝑎𝑠𝑒\x20𝐵𝑎𝑟𝑢,\x20𝐼𝑛𝑔𝑎𝑡\x20𝐵𝑟𝑜\x20𝐻𝑎𝑟𝑔𝑎𝑖𝑙𝑎ℎ\x20𝐾𝑎𝑟𝑦𝑎\x20𝑂𝑟𝑎𝑛𝑔','4797149cHpyAr','1889012mnSoRN','614144kgruDj','881543vTUQPF','7230018AJicna','431319oJBHXC','2738344xLndFO','5OViuWJ'];_0x8bc0=function(){return _0x51acb;};return _0x8bc0();}function _0x316f(_0x2c655c,_0x3e87c7){var _0x8bc0ea=_0x8bc0();return _0x316f=function(_0x316fec,_0x191d70){_0x316fec=_0x316fec-0x1a1;var _0x1426f4=_0x8bc0ea[_0x316fec];return _0x1426f4;},_0x316f(_0x2c655c,_0x3e87c7);}var _0x5dacad=_0x316f;(function(_0x417a8f,_0x23d35e){var _0x14bd01=_0x316f,_0x4fd767=_0x417a8f();while(!![]){try{var _0x2b4dc5=parseInt(_0x14bd01(0x1a5))/0x1+parseInt(_0x14bd01(0x1a8))/0x2+parseInt(_0x14bd01(0x1a7))/0x3+parseInt(_0x14bd01(0x1a3))/0x4+parseInt(_0x14bd01(0x1a9))/0x5*(-parseInt(_0x14bd01(0x1a6))/0x6)+-parseInt(_0x14bd01(0x1a2))/0x7+-parseInt(_0x14bd01(0x1a4))/0x8;if(_0x2b4dc5===_0x23d35e)break;else _0x4fd767['push'](_0x4fd767['shift']());}catch(_0x2e126b){_0x4fd767['push'](_0x4fd767['shift']());}}}(_0x8bc0,0xdba4f));var todd=_0x5dacad(0x1a1);                          
//=================================================//	
 //>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			LexxyOFC.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			LexxyOFC.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			LexxyOFC.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			LexxyOFC.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			LexxyOFC.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		
        const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        LexxyOFC.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: flexx
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        LexxyOFC.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
        jadinya = await LexxyOFC.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        LexxyOFC.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: flexx,
        })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return LexxyOFC.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        
// PEMBATASAN		            
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./storage/user.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
LexxyOFC.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `*Mohon Verifikasi Terlebih Dahulu :)*`
const daftar2 = `© RyGiiXyzzz`
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `Verify`,},type: 1,}]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}        
//================================================================================//
const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      LexxyOFC.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };           
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
                };
                download(url, './stik' + names + '.png', async function () {
                console.log('done coeg');
                let filess = './stik' + names + '.png'
                let asw = './stik' + names + '.webp'
                exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                let media = fs.readFileSync(asw)
                LexxyOFC.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                fs.unlinkSync(filess)
                fs.unlinkSync(asw)
                });
              });
            }

//================================================================================//
        const sendMedia = async(from, url, text="", mids=[]) =>{
                if(mids.length > 0){
                text = normalizeMention(from, text, mids)
                } 
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                    mime = res.headers['content-type']
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                    type = MessageType.video
                    mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                    mime = Mimetype.mp4Audio
                    }
                    LexxyOFC.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                    
                    fs.unlinkSync(filename)
                });
            }   
            
//================================================================================//
           
const sendFile = async (medya, namefile, capti, tag, vn) => {
  baper = await getBuffer(medya)
  mimi = ''
  if (namefile.includes('m4a')){
  LexxyOFC.sendMessage(from, baper, audio,{mimetype: 'audio/mp4',quoted: tag, filename: namefile, ptt: vn})
  }
  if (namefile.includes('mp4')){
  LexxyOFC.sendMessage(from, baper, video, {mimetype: 'video/mp4', quoted: tag, caption: capti, filename: namefile})
  }
  if (namefile.includes('gif')){
  LexxyOFC.sendMessage(from, baper, video, {mimetype: Mimetype.gif, caption: capti, quoted: tag, filename: namefile})
  } 
  if (namefile.includes('png')){
  LexxyOFC.sendMessage(from, baper, image, {quoted: tag, caption: capti, filename: namefile})
  }
  
  if (namefile.includes('webp')){
  LexxyOFC.sendMessage(from, baper, sticker, {quoted: tag})
  } else {
  kobe = namefile.split(`.`)[1]
  LexxyOFC.sendMessage(from, baper, document, {mimetype: kobe, quoted: tag, filename: namefile})
  }
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
LexxyOFC.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
LexxyOFC.sendMessage(from, hasil, type, options).catch(e => {
LexxyOFC.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}

//================================================================================//
           
	colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
	
	const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	
//AUTO
LexxyOFC.chatRead(from, "read")

//================================================================================//
		
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'Menggunakan Fitur', color(command), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'Memakai Fitur', color(command), 'DI Group', color(groupName), 'args :', color(args.length))  
   
//================================================================================//
                 	        				      	        				   	        				 
switch(is) {
case 'assalamualaikum':
reply('waalaikumsallam')
}
switch(is) {
case 'p':
case 'bg':
case 'bang':
hh = fs.readFileSync('./vn/ohayo.mp3')
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: mek, mimetype: 'audio/mp4', ptt:true})  
}     	       
switch(is) {
case 'by':
case 'syg':
case 'sayang':
hh = fs.readFileSync('./vn/syg.mp3')
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: mek, mimetype: 'audio/mp4', ptt:true})  
}     	       
switch(is) {
case 'hallo':
case 'kak':
case 'bro':
case 'hai':
case 'woi':
hh = fs.readFileSync('./vn/adap.mp3')
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: mek, mimetype: 'audio/mp4', ptt:true})  
}     	 
switch(is) {
case 'anjg': case 'Anjg':
case 'kontol': case 'bacot':
case 'anjing': case 'anj':
case 'babi': case 'cot':
case 'ngentod': case 'bct':
case 'ajg':
case 'asw':
case 'taek':
case 'asu':
case 'anjir':
case 'memek':
hh = fs.readFileSync('./vn/toxic.mp3')
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: mek, mimetype: 'audio/mp4', ptt:true})  
}     	        				   	        				   	        				
      	        				   		   	        				
//================================================================================//
					
if (!mek.key.fromMe && banChats === true) return

switch (command) {
case 'daftar':
case 'verify':
if (isRegistered) return reply('𝑲𝒂𝒎𝒖 𝑺𝒖𝒅𝒂𝒉 𝑻𝒆𝒓𝒅𝒂𝒇𝒕𝒂𝒓 𝑫𝒊 𝑫𝒂𝒕𝒂𝒃𝒂𝒔𝒆')
namaUser = args.join(" ")
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
            fs.writeFileSync('./storage/user.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
const jancok =`*[ Berhasil Verifikasi ]*
➳ Nama : *${pushname}*
➳ Nomor : *${sender.split('@')[0]}*
➳ Seri : *${serialUser}*
➳ Pengguna : *${_registered.length}*`
jancok2 =`${creator}`
but = [
{buttonId:`${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1},
{buttonId:`${prefix}info`, buttonText: {displayText: 'INFO'}, type: 1}
]
sendButMessage(from, jancok, jancok2, but)
hh = fs.readFileSync('./vn/sound5.mp3')
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: mek, mimetype: 'audio/mp4', ptt:true})  
break
case 'help':
case 'menu':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
hh = fs.readFileSync('./vn/ohayo.mp3')
const tod =`*Haii Kak ${jams}*
*RyGiiXyzzz <3*

*[ Others Menu ]*
*${prefix}Ytmp4*
*${prefix}Tiktok*
*${prefix}Play*
*${prefix}Toimg*
*${prefix}Colong*

*[ Fun Menu ]*
*${prefix}Bisakah*
*${prefix}Apakah*
*${prefix}Kapankah*

*[ Check In Menu ]*
*${prefix}Goblok*
*${prefix}Cantik*
*${prefix}Ganteng*
*${prefix}Pintar*
*${prefix}Jago*

*[ Random Menu ]*
*${prefix}Iklan*
*${prefix}Meme*
*${prefix}Darkjoke*
*${prefix}Ytsearch*
*${prefix}Anime*
*${prefix}Katailham*
*${prefix}Sticker*
*${prefix}Nekonime*

*[ Specials Menu ]*
*${prefix}Quotemaker*
*${prefix}Nulis*
*${prefix}Tahta*

*[ Owner Menu ]*
*${prefix}Public*
*${prefix}Self*
*${prefix}Bc / Broadcast*`
tod2 =`${fake}`
           buttons = [
{buttonId:`${prefix}owner`,buttonText:{displayText: 'Owner'},type:1},
{buttonId:`${prefix}ruls`,buttonText:{displayText: 'Rules'},type:1}
]
sendButMessage(from, tod, tod2, buttons)
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'play':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
if (args.length == 0) return reply ('Judulnya Apa Kak?')
bo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=KontoleBaperan&query=${bo}`)
get = anu.result
buff = await getBuffer(get.thumbnail)

td =`*PLAY MP3 🧞‍♂️*\n*JUDUL / TITLE :* ${get.title}`
tdd =`© RyGiiXyzzz`
but = [
{buttonId:`${prefix}mp3 ${args.join(" ")}`,buttonText:{displayText: '🎧 Music'},type:1},
{buttonId:`${prefix}mp4 ${args.join(" ")}`,buttonText:{displayText: '📽️ Video'},type:1} 
]
sendButLocation(from, td, tdd, buff, but)
break
case 'mp3':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
bo = args.join(" ")
reply('*Audio Lagi Di Proses...*')
anu = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=KontoleBaperan&query=${bo}`)
mp3 = await getBuffer(anu.result.audio)
LexxyOFC.sendMessage(from, mp3, audio, { mimetype: 'audio/mp4' })
break
case 'mp4':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
bo = args.join(" ")
reply('*Video Lagi Di Proses...*')
anu = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=KontoleBaperan&query=${bo}`)
mp4 = await getBuffer(anu.result.video)
LexxyOFC.sendMessage(from, mp4, video, { mimetype: 'video/mp4', quoted: mek })
break
case 'goblok':
case 'cantik':
case 'ganteng':
case 'tolol':
case 'pintar':
case 'bodoh':
case 'jago':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
rate = body.slice(1)
const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nHasilnya : '+ te+'%', text, { quoted: mek })
break
case 'apakah':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
const kah = apa[Math.floor(Math.random() * apa.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
break
case 'kapankah':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
break
case 'bisakah':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
break
case 'suit':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = [
"Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
"Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
"Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
"Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
"Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
"Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
"Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
"Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
"Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
case 'loli':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
sticWait(from)
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/loli?apikey=IkyOgiwara`)
LexxyOFC.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Kak Lolinya ^_^' })
break
case 'quotemaker':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
if (args.length == 0) return reply('Quotes Text Nya Mana?')
bo = args.join(" ")
sticWait(from)
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${bo}&apikey=IkyOgiwara`)
LexxyOFC.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Kak Hasilnya ^_^' })
break
case 'meme':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
sticWait(from)
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara`)
LexxyOFC.sendMessage(from, anu, image, { quoted: mek, caption: 'Jangan Lupa Bahagia' })
break
case 'textimg':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
if (args.length == 0) return reply('Quotes Text Nya Mana?')
bo = args.join(" ")
sticWait(from)
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/textto-image?text=${bo}`)
LexxyOFC.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Kak Hasilnya ^_^' })
break
case 'ytmp3':
if (args.length == 0) return reply('Link Nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=KontoleBaperan&url=${bo}`)
get = anu.result
ini_txt =`❏ *YTMP3 DOWNLOAD*\n\n`
ini_txt +=`*Judul* : ${get.title}\n`
ini_txt +=`*Size* : ${get.size}\n`
res = await getBuffer(get.thumbnail)
LexxyOFC.sendMessage(from, res, image, {quoted: mek, caption: ini_txt })
ris = await getBuffer(anu.result.link)
LexxyOFC.sendMessage(from, ris, audio, { quoted: mek })
break
case 'ytmp4':
if (args.length == 0) return reply('Link Nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=KontoleBaperan&url=${bo}`)
get = anu.result
ini_txt =`❏ *YTMP4 DOWNLOAD*\n\n`
ini_txt +=`*Judul* : ${get.title}\n`
ini_txt +=`*Size* : ${get.size}\n`
res = await getBuffer(get.thumbnail)
LexxyOFC.sendMessage(from, res, image, {quoted: mek, caption: ini_txt })
ros = await getBuffer(anu.result.link)
LexxyOFC.sendMessage(from, ros, video, { mimetype: 'video/mp4', quoted: mek })
break
case 'anjing':
sticWait(from)
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/anjing?apikey=IkyOgiwara`)
LexxyOFC.sendMessage(from, anu, image, { quoted: mek, caption: 'By Ilham Samudra' })
break
case 'darkjoke':
sticWait(from)
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/darkjoke?apikey=IkyOgiwara`)
LexxyOFC.sendMessage(from, anu, image, { quoted: mek, caption: 'By Ilham Samudra' })
break
case 'nekonime':
sticWait(from)
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/nekonime?apikey=IkyOgiwara`)
LexxyOFC.sendMessage(from, anu, image, { quoted: mek, caption: 'By Ilham Samudra' })
break

case 'nickepep':
sticWait(from)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=IkyOgiwara`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'katailham':
sticWait(from)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=IkyOgiwara`)
reply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'katasindiran':
sticWait(from)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/skak?apikey=IkyOgiwara`)
reply(`*Random Kata Sindiran*\n${anu.result}`)
break
case 'iklan':
hh = fs.readFileSync('./vn/iklan.mp3')
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dropwater':
if (args.length == 0) return reply(`𝑻𝒆𝒙𝒕 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Naruto`)
qo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://lexxy-api.herokuapp.com/api/textpro/drop-water?apikey=${LexApi}&text=${qo}`)
bed = await getBuffer(anu.result)
LexxyOFC.sendMessage(from, bed, image, { quoted: mek, caption: 'Nih Kak Hasilnya' })
break
case 'blackpink':
if (args.length == 0) return reply(`𝑻𝒆𝒙𝒕 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Naruto`)
qo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://lexxy-api.herokuapp.com/api/textpro/black-pink?apikey=${LexApi}&text=${qo}`)
bed = await getBuffer(anu.result)
LexxyOFC.sendMessage(from, bed, image, { quoted: mek, caption: 'Nih Kak Hasilnya' })
break
case 'logowolf':
if (args.length == 0) return reply(`𝑻𝒆𝒙𝒕 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Naruto`)
qo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://lexxy-api.herokuapp.com/api/textpro/logo-wolf2?apikey=${LexApi}&text=WOLF&text2=${qo}`)
ini = await getBuffer(anu.result)
LexxyOFC.sendMessage(from, ini, image, { quoted: mek, caption: 'Nih Kak Hasilnya' })
break
case 'crisma':
if (args.length == 0) return reply(`𝑻𝒆𝒙𝒕 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Naruto`)
qo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://lexxy-api.herokuapp.com/api/textpro/christmas?apikey=${LexApi}&text=${qo}`)
ini = await getBuffer(anu.result)
LexxyOFC.sendMessage(from, ini, image, { quoted: mek, caption: 'Nih Kak Hasilnya' })
break
case 'natural':
if (args.length == 0) return reply(`𝑻𝒆𝒙𝒕 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Naruto`)
qo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://lexxy-api.herokuapp.com/api/textpro/natural-leaves?apikey=${LexApi}&text=${qo}`)
ini = await getBuffer(anu.result)
LexxyOFC.sendMessage(from, ini, image, { quoted: mek, caption: 'Nih Kak Hasilnya' })
break
case 'gradient':
if (args.length == 0) return reply(`𝑻𝒆𝒙𝒕 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Naruto`)
qo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://lexxy-api.herokuapp.com/api/textpro/3d-gradient?apikey=${LexApi}&text=${qo}`)
ini = await getBuffer(anu.result)
LexxyOFC.sendMessage(from, ini, image, { quoted: mek, caption: 'Nih Kak Hasilnya' })
break
case 'pornhub':
if (args.length == 0) return reply(`𝑻𝒆𝒙𝒕 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Lexxy OFC`)
txt1 = args[0]
txt2 = args[1]
sticWait(from)
anu = await fetchJson(`https://lexxy-api.herokuapp.com/api/textpro/porn-hub?apikey=${LexApi}&text1=${txt1}&text2=${txt2}`)
ini = await getBuffer(anu.result)
LexxyOFC.sendMessage(from, ini, image, { quoted: mek, caption: 'Nih Kak Hasilnya' })
break
case 'nulis':
if (args.length == 0) return reply(`𝑻𝒆𝒙𝒕 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Naruto Hacker`)
qo = args.join(" ")
sticWait(from)
bed = await getBuffer(`https://lexxy-api.herokuapp.com/api/maker/nulis?apikey=${LexApi}&text=${qo}`)
LexxyOFC.sendMessage(from, bed, image, { quoted: mek, caption: 'Nih Kak Hasilnya' })
break
case 'tahta':
if (args.length == 0) return reply(`𝑻𝒆𝒙𝒕 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Naruto`)
qo = args.join(" ")
sticWait(from)
bed = await getBuffer(`https://lexxy-api.herokuapp.com/api/maker/harta-tahta?apikey=${LexApi}&text=${qo}`)
LexxyOFC.sendMessage(from, bed, image, { quoted: mek, caption: 'Nih Kak Hasilnya' })
break
case 'tiktok':
if (args.length == 0) return reply('Link Nya Mana?')
bo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=KontoleBaperan&url=${bo}`)
buffer = await getBuffer(anu.result.link)
LexxyOFC.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
break
case 'ppcouple':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
sticWait(from)
anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=${xziyApi}`)
cewe = await getBuffer(anu.result.female)
cowo = await getBuffer(anu.result.male)
LexxyOFC.sendMessage(from, cowo, image, {quoted: mek, caption: 'Nih Versi Cowo Nya ^_^' })
LexxyOFC.sendMessage(from, cewe, image, {quoted: mek, caption: 'Nih Versi Cewe Nya ^_^' })
break
            case 'ruls':
            if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
td = `*「 PERATURAN BOT 」*

1. DILARANG TELFON BOT!!
2. DILARANG SPAM BOT
3. DILARANG BERKATA KASAR
4. DILARANG SPAM VIRTEX
5. DILARANG TELEFON OWNER
6. DILARANG SPAM GROUP
7. DILARANG SPAM ADMIN
8. DILARANG BERKATA KASAR DI GC

⚠️JIKA KALIAN MELANGGAR.. AKAN DI BLOCK + BANNED!!`
td2 =`${fake}`
but = [
{buttonId:`${prefix}info`,buttonText:{displayText: '</INFO'},type:1}
]
sendButMessage(from, td, td2, but)
break
    case 'grup':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'imgsearch':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await LexxyOFC.sendMessage(from,li,image,{quoted: mek})           
            break
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await LexxyOFC.sendMessage(from,di,image,{quoted: mek})
            break
    case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            reply(' ```ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            reply(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            reply(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break 
    case 'tomp3':
            if (!isQuotedVideo) return reply('Reply videonya!')
            sticWait(from)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            LexxyOFC.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
case 'info':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
textt =`${todd}\n\n*Next Info*\n*© RyGiiXyzzz*`
reply(textt)
break
    case 'anime':
    if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
            sticWait(from)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            LexxyOFC.sendMessage(from,media,image,{quoted:mek,caption:'*© RyGiiXyzzz*'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./fetcher.js').createExif(satu, dua)
			require('./fetcher.js').modStick(media, LexxyOFC, mek, from)
			break
    case 'public':
    if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
      if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
          	if (!mek.key.fromMe) return flex('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	flex(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
	if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
	  if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
          	if (!mek.key.fromMe) return flex('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	flex(`「 *SELF-MODE* 」`)
          	break
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
    if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                LexxyOFC.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            LexxyOFC.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
    case 'toimg':
    if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			sticWait(from)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await LexxyOFC.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '*© RyGiiXyzzz*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
	  if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
			if (!q) return reply(mess.wrongFormat)
			fake = q
			reply(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
	if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
	  if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await LexxyOFC.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			flex('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	  if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await LexxyOFC.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			reply('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
			
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            sticWait(from)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            LexxyOFC.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
    case 'runtime':
    case 'test':
      if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
            run = process.uptime() 
            teks = `${kyun(run)}`
            reply(teks)
            break  
	case 'speed':
	case 'ping':
	  if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}${command}: ${latensi.toFixed(4)} Second*`
			reply(pingnya)
			})
			break  
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await LexxyOFC.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
                    case 'trut':
        case 'truth':
        const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = await getBuffer(`https://www.linkpicture.com/q/images_72.png`)
	    but = [
          { buttonId: `${prefix}truth`, buttonText: { displayText: 'ᴛʀᴜᴛʜ' }, type: 1 },
          { buttonId: `${prefix}dare`, buttonText: { displayText: 'ᴅᴀʀᴇ' }, type: 1 }
        ]
        sendButLocation(from, ttrth, 'GK JALANIN WAJIB DONATE',truteh, but, {quoted: mek})
	        	break
		case 'dare':
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "😎??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		todz = await getBuffer(`https://www.linkpicture.com/q/images_72.png`)
	    but = [
          { buttonId: `${prefix}truth`, buttonText: { displayText: 'ᴛʀᴜᴛʜ' }, type: 1 },
          { buttonId: `${prefix}dare`, buttonText: { displayText: 'ᴅᴀʀᴇ' }, type: 1 }
        ]
        sendButLocation(from, der, 'GK JALANIN WAJIB DONATE',todz, but, {quoted: mek})
       	   break
          case 'simi':
           case 'p':
           case 'bot':
           if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
           if (args.length == 0) return reply(`Hallo Kak ${pushname}`)
           teksni = args.join(" ")
           get_result = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lolkey}&text=${teksni}`)
           getresult = get_result.result
             reply(getresult)         
             break           
          case 'bc':
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
         if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
         if (args.length < 1) return reply('.......')
         anu = await LexxyOFC.chats.all()
         if (isMedia && !mek.message.videoMessage || isQuotedImage) {
         const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
         bc = await LexxyOFC.downloadMediaMessage(encmedia)
         for (let _ of anu) {
         LexxyOFC.sendMessage(_.jid, bc, image, { caption: `[ Bot izin Broadcast ]\n\n${body.slice(4)}` })
         }
         reply('Suksess broadcast')
         } else {
         for (let _ of anu) {
         sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
         }
         reply('Suksess broadcast')
         }
		break
case 'owner':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, flexx)
sendKontak(from, `${owner}`, `RyGiiXyzzz`)
break      
default:
if (budy.startsWith('x')){
try {
return LexxyOFC.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('~> [ ! ]', 'red'), 'LexxyOFC', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}


	
    
