let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Link 18+ : No VPN😈

- http://149.3.170.155.com
- http://157.230.193.154.com
- http://yandex.com
`.trim(), m)
}
handler.help = ['kode18']
handler.tags = ['premium']
handler.command = /^(kode18)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

