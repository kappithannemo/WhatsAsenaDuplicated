/* Codded by 2021 isuwa brooo
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const king = require('../events');
const {MessageType, MessageOptions} = require('@adiwajshing/baileys');
const Config = require('../config');

// ==================== MAIN DESCRIPTION TEXT ====================
const h_Des = "Yardım menüsünden botu kullanım hakkında bilgi verir."
const h_DedEN = "Gives information about using the bot from the Help menu."
const h_DedSI = "උදව් මෙනුවෙන් බොට් භාවිතා කිරීම පිළිබඳ තොරතුරු ලබා දේ."
const matchnullEN = "========== *🆘 General Help 🆘* ==========\n\n🔹 *.alive:* Checks if the bot is running.\n\n🔹 *.king:* Shows the complete list of commands.\n🔹 *.setvar:* It settings config without entering Heroku.\n\n🔸 For more help, use the command ```.help <the topic you want help with>```\nExample: ```.help how can ı turn to public my bot?```\n\n========== *End General Help* =========="
const matchnullSI = "========== * 🆘 පොදු උදව් * ========= \ n \ n🔹 * .සහගත: * බොට් එක දුවනවාදැයි පරීක්‍ෂා කරයි. \ n \ n 🔹 * .king: * සම්පූර්ණ විධාන ලැයිස්තුව පෙන්වයි. \ N🔹 * .setvar: * හෙරෝකු ඇතුළු නොකර එය සැකසුම් සකසයි. \ N \ n🔸 වැඩිදුර උදව් සඳහා "" ඔබට අවශ්‍ය මාතෘකාවට උදව් කරන්න. උදවු>> "" \ n උදාහරණය: "" උදව් කරන්න කොහොමද මගේ බොට් එක ප්‍රසිද්ධ කරන්නේ කෙසේද? "" ==== "
const matchnull = "========== *🆘 Genel Yardım 🆘* ==========\n\n🔹 *.alive:* Botun çalışıp çalışmadığını kontrol eder.\n🔹 *.asena:* Tüm komut listesini gösterir.\n🔹 *.setvar:* Herokuya girmeden config ayarlar.\n\n🔸 Daha fazla yardım için ```.help <yardım almak istediğiniz konu>``` komutunu kullanın.\nÖrnek: ```.help botumu nasıl public yaparım?```\n\n========== *Genel Yardım Bitti* =========="
const notfound = "```Almak istediğiniz yardım bulunamadı!```\n```Lütfen daha açıklayıcı bir şekilde sorunu belirtin.```"
const notfoundEN = "```The help you wanted to get was not found!```\n```Please state the problem in a more descriptive way.```"
const notfoundSI = "" "ඔබට ලබා ගැනීමට අවශ්‍ය උපකාරය හමු නොවීය!``` \ n "" කරුණාකර ගැටලුව වඩාත් විස්තරාත්මකව සඳහන් කරන්න. "

// ==================== ALL DESCRİPTİONS ====================
const pubTR = "Botunuzu public yapmak komutları herkese açık yapacaktır. Public yapıldıktan sonra kullanıcı sadece kişisel ve admin komutlarını kullanabilir hale gelir. Onun dışında komutları kullanamaz.\nBotunuzu public yapmak için *.setvar WORK_TYPE:public* komutunu kullanın."
const pubEN = "Making your bot public will make the commands public. After it is made public, the user can only use personal and admin commands. User cannot use commands other than this.\n To make your bot public, type *.setvar WORK_TYPE:public*"
const pubDSI = "ඔබේ බොට් එක ප් රසිද්ධ කිරීමෙන් විධානයන් ප් රසිද්ධ කෙරේ. එය ප් රසිද්ධියට පත් වූ පසු පරිශීලකයාට භාවිතා කළ හැක්කේ පුද්ගලික සහ පරිපාලක විධානයන් පමණි. පරිශීලකයාට මෙය හැර වෙනත් විධාන භාවිතා කළ නොහැක. \ n ඔබේ බොට් ප් රසිද්ධ කිරීමට *.setvar _TYPE: WORK_TYPE:public*"
const blTR = "BlockChat botunu belirlediğiniz gruba, kişiye veya birden fazla sohbete kapatır.\nKullanmak için önce sohbete gidip *.jid* yazın. Daha sonra gelen *90xxx-xxx@g.us veya 90xxx@whatsapp.net* yazısını kopyalayın. (@g.us ve @whatsapp.net'i silin!)\nArdından *.setvar BLOCK_CHAT:id && id1,id2...* komutunu kullanın."
const sudoTR = "SUDO, botunuzu seçtiğiniz kullanıcıya tüm yetkileri ile paylaşır. Numara sonuna ,0 koyarsanız gruplarda da aktif hale gelir.\nKullanmak için *.setvar SUDO:90xxxx && 90xx,90xxx [ülke kodu ile, (❌ +90xx • ✅ 90xx)]"

const privTR = "Botunuzu private yapmak komutları sadece size özel yapar. Başkaları kullanamaz.\nBotunuzu private yapmak için *.setvar WORK_TYPE:private* komutunu kullanın."
const privEN = "Making your bot private makes commands private only for you. Anyone cannot use.\nTo make your bot private, type *.setvar WORK_TYPE:private*"
const blEN = "Closes BlockChat bot to group, person or multiple chats you specify.\n To use it, first go to chat and type *.jid* Then copy to incoming code. (Except @g.us or @whatsapp.net!)\nThen use this command *.setvar BLOCK_CHAT:id && id1,id2..*"
const sudoEN = "SUDO, Shares your bot to the user you choose with all its powers.If you put ,0 at the end of the number, the user can also use it in the group.\nTo use, type *.setvar SUDO:90xxxx && 90xx,90xxx [with county code, (❌ +90xx • ✅ 90xx)]*"
const privSI = "ඔබේ බොට් පුද්ගලිකකරණය කිරීමෙන් ඔබට පමණක් විධානයන් පෞද්ගලික වේ. කිසිවෙකුටත් භාවිතා කළ නොහැක. \ n ඔබේ බොට් එක පෞද්ගලික කිරීමට, *.setvar WORK_TYPE: private *" ටයිප් කරන්න.
const blSI = "බ්ලොක් චැට් බොට් කණ්ඩායම, පුද්ගලයා හෝ ඔබ සඳහන් කරන බහු චැට් වලට වසා දමයි. \ n එය භාවිතා කිරීමට මුලින්ම චැට් කිරීමට ගොස් * .jid * ටයිප් කර එන කේතයට පිටපත් කරන්න. ( @g.us හෝ @whatsapp.net හැර. !) \ n පසුව මෙම විධානය භාවිතා කරන්න *.setvar BLOCK_CHAT: id && id1, id2 .. *"
const sudoSI = "සුඩෝ, ඔබේ බොට් එක ඔබ තෝරා ගන්නා පරිශීලකයාට එහි සියලු බලතල වලින් බෙදා දෙන්න. ඔබ අංකය අවසානයේ 0 තැබුවහොත්, පරිශීලකයාට එය සමූහයෙහි ද භාවිතා කළ හැකිය. \ n භාවිතා කිරීමට *.setvar SUDO ටයිප් කරන්න. : 90xxxx && 90xx, 90xxx [ප්‍රාන්ත කේතය සමඟ, (❌ +90xx • 90xx)]*"

if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
    
    King.addCommand({pattern: 'help ?(.*)', fromMe: true, desc: h_Des}, (async (message, match) => {

        if (match[1] === '') {
            return await message.client.sendMessage(
                message.jid,
                matchnull,
                MessageType.text
            );
        }
        else if ( (match[1].includes('public') && match[1].includes('nasıl')) || (match[1].includes('public') && match[1].includes('yapimi')) || (match[1].includes('public') && match[1].includes('yapımı')) || (match[1].includes('public') && match[1].includes('nedir')) || (match[1].includes('herkese') && match[1].includes('acik') || match[1].includes('açık')) ) {
            return await message.client.sendMessage(
                message.jid,
                pubTR,
                MessageType.text
            );
        }
        else if ( (match[1].includes('private') && match[1].includes('nasıl')) || (match[1].includes('private') && match[1].includes('yapimi')) || (match[1].includes('private') && match[1].includes('yapımı')) || (match[1].includes('private') && match[1].includes('nedir')) || (match[1].includes('bana') && match[1].includes('özel')) ) {
            return await message.client.sendMessage(
                message.jid,
                privTR,
                MessageType.text
            );
        }
        else if ( (match[1].includes('belirli') && match[1].includes('sohbet')) || (match[1].includes('sohbet') && match[1].includes('kapat')) || (match[1].includes('nasil') && match[1].includes('kapatabilirim')) || (match[1].includes('blockchat') && match[1].includes('nedir')) || (match[1].includes('sohbet') && match[1].includes('özel')) ) {
            return await message.client.sendMessage(
                message.jid,
                blTR,
                MessageType.text
            );
        }
        else if ( (match[1].includes('SUDO') && match[1].includes('nedir')) || (match[1].includes('SUDO') && match[1].includes('nasil')) || (match[1].includes('botu') && match[1].includes('baskasina')) || (match[1].includes('botu') && match[1].includes('arkadaşıma')) || (match[1].includes('SUDO') && match[1].includes('kullanmak')) ) {
            return await message.client.sendMessage(
                message.jid,
                sudoTR,
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                notfound,
                MessageType.text
            );
        }
    }));
}
else {
    
    King.addCommand({pattern: 'help ?(.*)', fromMe: true, desc: h_DedEN}, (async (message, match) => {

        if (match[1] === '') {
            return await message.client.sendMessage(
                message.jid,
                matchnullEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('public') && match[1].includes('how')) || (match[1].includes('public') && match[1].includes('set')) || (match[1].includes('public') && match[1].includes('setting')) ) {
            return await message.client.sendMessage(
                message.jid,
                pubEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('private') && match[1].includes('how')) || (match[1].includes('private') && match[1].includes('set')) || (match[1].includes('private') && match[1].includes('setting')) ) {
            return await message.client.sendMessage(
                message.jid,
                privEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('SUDO') && match[1].includes('usage')) || (match[1].includes('SUDO') && match[1].includes('what')) || (match[1].includes('how') && match[1].includes('SUDO')) || (match[1].includes('set') && match[1].includes('SUDO')) || (match[1].includes('share') && match[1].includes('bot')) ) {
            return await message.client.sendMessage(
                message.jid,
                sudoEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('block') && match[1].includes('chat')) || (match[1].includes('how') && match[1].includes('block')) || (match[1].includes('close') && match[1].includes('bot')) || (match[1].includes('specific') && match[1].includes('chat')) || (match[1].includes('specific') && match[1].includes('set')) ) {
            return await message.client.sendMessage(
                message.jid,
                blEN,
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                notfoundEN,
                MessageType.text
            );
        }
    }));
}
