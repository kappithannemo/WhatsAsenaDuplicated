/* Copyright (C) 2021 King Isuwa.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

King Isuwa - isuwa brooo
*/


const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./queenamdi/');
const fs = require('fs');

async function KingIsuwa () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [2, 2126, 14]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('🔄 connecting', async () => {
        console.log(`${chalk.green.bold('King')}${chalk.blue.bold(' Isuwa')}
${chalk.white.italic('King Isuwa Sting session')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);
    });
    

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('King Isuwa QR Code: '),
			'KING;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				)
		);
		await conn.sendMessage(
			conn.user.jid,
			'KING;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				),
			MessageType.text
		);
		if (conn.user.jid.startsWith('94')) {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Meka denna epa katawath ' + conn.user.name + '* ⚠️',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"Meka copy karanna bari nm whatsapp eke athi bn code eka awith!\n"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

kingIsuwa()

