let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
DANA : 085216007427
PULSA : 0895346257159
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*DONASI NYA TUANN*', 'status@broadcast')
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
