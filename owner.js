let handler = function (m) {
  conn.sendContact(m.chat, '6285216007427', 'Danuu Tamvan:v', m)
  conn.reply(m.chat, 'Tuhh Nomer Pacar Ku Kak Eh Ownerku Maksud Nya >\<', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
