let handler  = async (m, { conn, text }) => {
let img = 'https://telegra.ph/file/6b35f9a1ee0b71f8a55e0.jpg'
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  const delay = time => new Promise(res=>setTimeout(res,time));
  for (let id of chats){
    conn.sendButtonLoc(m.chat, await (await fetch(img)).buffer(), `
${text}
`.trim(), 'anu', 'Gk tau anying:v', ':v'(
    await delay(0)
  }
  conn.reply(m.chat, `*Mengirim pesan broadcast ke ${chats.length} chat*`, m)
}
handler.help = ['ppk'].map(v => v + ' *text*')
handler.tags = ['owner']
handler.command = /^(ppk)$/i
handler.owner = true
handler.fail = null
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)