/* Copyright (C) 2021 King Isuwa.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

King Isuwa - isuwa brooo
*/

const King = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');



if (Config.WORKTYPE == 'private') {

    King.applyCMD({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC,  deleteCommand: false}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```👸💎 Hey There! I'm Online now. 😙```\n\n*Developer:* ```isuwa brooo```\n\n*WhatsApp :* wa.me/94783800632\n\n*Youtube channel :* https://www.youtube.com/channel/UCZx8U1EU95-Wn9mH4dn15vQ\n\n```Thank You For Using king Isuwa💞```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright © 2021 | King Isuwa*' })
     }
    }));

    King.applyCMD({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    King.applyCMD({pattern: 'version', fromMe: true, desc: Lang.BOT_V,  deleteCommand: false}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*🧬 King Isuwa Version 🧬*\n\n` + 
                '```Installed version :```\n' +
                Lang.version + 
                `\n\nCheck official website : https://www.amdaniwasa.com/`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    King.applyCMD({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```👸💎 Hey There! I'm Online now. 😙```\n\n*Developer:* ```isuwa brooo```\n\n*WhatsApp :* wa.me/94783800632\n\n*Youtube channel :* https://www.youtube.com/channel/UCZx8U1EU95-Wn9mH4dn15vQ\n\n```Thank You For Using King Isuwa💞```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright © 2021 | King Isuwa*' })
     }
    }));

    King.applyCMD({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    King.applyCMD({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*🧬 Queen Amdi Version 🧬*\n\n` + 
                '```Installed version :```\n' +
                Lang.version + 
                `\n\nCheck official website : https://www.amdaniwasa.com/`
           , MessageType.text);
            
        }));
}
