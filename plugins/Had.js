//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    m.reply('✅ تم تعطيل البوت في هذه المجموعة')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['banchat', 'حظر']

handler.group = true
handler.owner = true


export default handler


`كود يقوم بحظر جميع اعضاء المجموعه من استخدام البوت`

المصدر 
 
> https://whatsapp.com/channel/0029VadWNZBLdQei1yiuc52P
