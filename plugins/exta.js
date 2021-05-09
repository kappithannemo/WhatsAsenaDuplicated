Asena.addCommand({ pattern: 'pic ?(.*)', fromMe: false,  dontAddCommandList: true}, async (message, match) => {

        
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
          nos,
        } = response.data.result.result

        const profileBuffer = await axios.get(nos, {responseType: 'arraybuffer'})

        const msg = ``

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg
        })
      })
      .catch(
        async (err) => await message.sendMessage("Error")),
      )
  },

 )



Asena.addCommand({ pattern: 'pinterest ?(.*)', fromMe: false,  desc: "Gives you a pic from pinterest"}, async (message, match) => {

    if (!userName) return await message.sendMessage("pic of what?")

    await message.sendMessage(infoMessage("Loading"))
          
    await axios
      .get(`https://gratisancok.herokuapp.com/api/pinterest?kata=${userName}&apikey=ZailaniGans`)
      .then(async (response) => {
        const {
          result,
        } = response.data

        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

        const msg = ``

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg
        })
      })
      .catch(
        async (err) => await message.sendMessage("Error")),
      )
  },

 )



