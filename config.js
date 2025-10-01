const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0hXSzZNYmxhNlJXNEFML2FweFBmOXBKMzBGY0F0RFRUNk9YamovZ2htQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEJ6WHpxdmNVeEQ5R1FocjBPa2NxYkl6a2hFZzQ4Y1FoYi9DT082K2lGWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTHlud0FDK0NybWpOSWNJdHRKdlZTUHNnUk50Q1FSaHZTWHl5NXBTUEVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJweVAvOC8rODRxVFJJM0FqOU9FdGk0TnMzN05hK3A2QmlEQ1RYRFlZc2pnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJLK2Y2QWNIUVFLajF3Z1pRaW1nenRKUDJMNm00TDFUN3NybHdmb0t6M2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNGNWM2MWlVanc0YnFnbGJPVWRpQ2toRUZVeENJWkFUc3J5NzdoZUdaRTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk9tS1hrMkN1WTI4bGNiOC9OZlZFa1JEaXd0RllGODhVdEUvRkhSbkVXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGJtZVJ4dkFDYURrTXNWTnphUEdQN3pIbDFEbjZPcjN2WUNyUitSNDVWbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZGcnI5eHM3dWtvTEVjSnVWWVAxQnA3M0lBTVZURUMyVkhJUDhSbmRlWXB1WE9MV1pmYUpJSFNtZFhianZmSmNLVUlINDFoVUl0M1EyWThsVFo2eGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6IkFlY1YzOTgzRWF0THFuOVJtdG1TdlRaUnBGSkhGZGlEbFBEYmtPUk80QWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjZQNFc4VlM0IiwibWUiOnsiaWQiOiI5Mzc4NTI5MzQwMDo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkI3wnZCa8J2QovCdkKUg8J2Qh/CdkJrwnZCkIiwibGlkIjoiMjA3MTU1MzQ5MTc2NDQ0OjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLWDYzYlFDRU55YTljWUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhaXFNZWNIRHpYL3k1b2VpTzhmTnIzRlYvcU1pNWc0dXYvY3BXZmtyM1dBPSIsImFjY291bnRTaWduYXR1cmUiOiJ2di9ZUXl1UjhydHZjME9SZGdZQWNQK2I0V2dRalhPUEd6c1FxTkIrdzFMaFVla3UxMmFuNVBpN09qWlEwU21oVlk0ak9IdGhLdDE0NXFBMnhKNElEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNVYvUGx5Z0Rkb3RpUk1iRnZXWjFkU3B4Rk1TSVZuSWR6NzFoUDRWYXkzK2dKdnZxVENPdjVIOTVmUmdrMitFUzg3SkNyc3M1RWF2Tm5QK2kxUEhlalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5Mzc4NTI5MzQwMDo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldvcWpIbkJ3ODEvOHVhSG9qdkh6YTl4VmY2akl1WU9Mci8zS1ZuNUs5MWcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTMzMzcyOSwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLWDkifQ==",
  START_IMG: process.env.START_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS NAIL-MD*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "NAIL-MD",
  STICKER_NAME: process.env.STICKER_NAME || "NAIL-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "93785293400",
  OWNER_NAME: process.env.OWNER_NAME || "NailHack",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *NAIL-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
 BOTMODE: process.env.BOTMODE || "button",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_MEDIA: process.env.ANTI_MEDIA || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "923253617422",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL NAIL_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
