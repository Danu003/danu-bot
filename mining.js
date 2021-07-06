let fs = require('fs')

let handler = async (m, { conn, text }) => {

let data = fs.readFileSync('/data/data/com.termux/files/home/Kuhong-V4/lib/mining.js')
let parse = JSON.parse(data)
let random = Math.floor(Math.random() * parse.length);
let json = parse[random]

  conn.reply(m.chat, `Selamat Anda Mendapatkan\n*+${json.exp} XP!*`, m)
   global.DATABASE._data.users[m.sender].exp += json.exp * 9999
}
handler.help = ['mining']
handler.tags = ['premium']
handler.command = /^mining|kerja/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
