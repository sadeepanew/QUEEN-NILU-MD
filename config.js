/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QUEENNILU;;;krNQVITS#hqxjqfXl_JQ7NkWhaWFJKZFcdSU8WcVChwpkuk4i5Pk' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = ''

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94740637622'

global.OWNER_NAME = '👼..Sadeepa..💌🍂'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = 'false' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "false" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'Queen - X'

global.FOOTER = 'Queen - X 2024'

global.BOT_OFFLINE = true   //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@Queen X 🤹‍♂️' //sticker

global.LANG = 'SI' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'Queen - X  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = '*Hi I"m online now.... My name = Queen -X How can I help you?' // Set Alive Message

global.MAX_SIZE = '10000' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = true

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'thue' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IRdyJY5P4sF5BhtP5PIdHH' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = false 

global.AUTO_REPLY = false 

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: no yt" //ur yt chanel name
global.socialm = "GitHub: sadeepanew" //ur github or insta name
global.location = "Srilanka, colombo" //ur location
