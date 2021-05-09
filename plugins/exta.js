/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const { errorMessage, infoMessage } = require('../helpers');
const Lang = Language.getString('instagram') ;





 /*

Asena.addCommand({ pattern: 'pic ?(.*)', fromMe: false,  dontAddCommandList: true}, async (message, match) => {
 const userName = match[1]
        
   var nos , userName;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
         nos = split[1];
        userName = split[0];
    }
  else nos = "5"

    if (!userName) return await message.sendMessage("pic of what?")

    await message.sendMessage(infoMessage("Loading"))
          
     
    await axios
      .get(`https://gratisancok.herokuapp.com/api/googleimage?kata=${userName}&apikey=ZailaniGans`)
      .then(async (response) => {
        const {
          [0],
        } = response.data.result.result

        const profileBuffer = await axios.get([0], {responseType: 'arraybuffer'})

        const msg = ``

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg
        })
      })
      .catch(
        async (err) => await message.sendMessage("Error"),
      )
  },

 )

*/

Asena.addCommand({ pattern: 'pint ?(.*)', fromMe: false,  desc: "Gives you a pic from pinterest"}, async (message, match) => {
    
        const userName = match[1]
        
    if (!userName) return await message.sendMessage("pic of what?")

    await message.sendMessage(infoMessage("Loading"))
          
    await axios
      .get(`https://gratisancok.herokuapp.com/api/pinterest?kata=${userName}&apikey=ZailaniGans`)
      .then(async (response) => {
        const {
          result,
        } = response.data

        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

        const msg = `${result}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg
        })
            await message.sendMessage(message.jid, msg,MessageType.text,{quoted:message.data})
      })
      .catch(
        async (err) => await message.sendMessage("Error"),
      )
  },

 )



