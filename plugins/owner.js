const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO 👨‍💻* 

*🔥 ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ANAYAT-MD*
🔥 *ɴᴜᴍʙᴇʀ* -: 923452401207
🔥 *ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029VbAm8LqL2ATpxklIct2g

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ  ANAYAT-MD Official*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/whkzda.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
