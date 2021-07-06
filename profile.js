let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
*[USER PROFILE]*

• *Nama* :${username}
• *Umur* :${registered ? '' + age : ''}
• *Tag* :(@${who.replace(/@.+/, '')})
• *Bio* : ${about ? '' + about : ''}
• *Link Direct* : wa.me/${who.split`@`[0]}
• *Exp* : ${exp}
• *Limit* : ${limit}
• *Premium* : No
• *Banned* : No
• *Terdaftar* : Yes
• *Last Claim* : Yes

`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile']
handler.tags = ['tools']
handler.command = /^profile$/i
module.exports = handler
