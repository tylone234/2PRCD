//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94719123076,94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RnZ1haUSs4czNyMnpQQlZLQ1M1SHgrRWMzei8vTExCSU5SMGppMi9XMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1N4cmltREFmbk13MTJKZVBFZFVGSXlxN05DUnRrNUlRYmdpNFFIaW9Fcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVR2hZUjQ2cVh2V3h1eTBQN0h3Rzc3SnFQNDFZYTJ3aEh4R3hRSmJzQjBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsK1U0a3lDMk1XTTZ3VEovVnZsdWZ5L0U0SkJrUGVrSmdOdlNBS0tMZHkwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNCdlF2ZFRkZkY3UUc1dENaOGlJYmZYa1JiSW1CRldtcFZlWEdPcDNFV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldkanNNUldaZkk0a0h3YjJEaVF0NW9aa2NWMHhwMmFOc1RFajJqM25oUTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU4rY0k0NHBTNjg0RjBDbUlzaUVWclpyUEZoMnlZcFlORCtZdmtpWWRtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWVLQWJxZ3BLSzFJMWRzUWN0UjhWSTRyYlVHclQ5NTNqSXIxRGhJZU9oQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlHUE1jUGVtTXo2R3N1NzMyellCTktQM00vY2MyRzdWZC84UC9Hck15L2JxL004QnlWWkR5eTVZOS81NEh5Z0FzUkt4SVFqS1BoV1J0Z1BDUFhoZ2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJ4SlBTSGJtb2VvOEZzaFBnRnd0TUVONHI2RTVOKzBCMjhQMnJrLzVQZ1ZRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxdGtpeVgycVRLYVZuRHh1TkdHM1B3IiwicGhvbmVJZCI6IjYzZDdhZTFiLTRmZTEtNGY3ZS1iN2QzLWVkZmE1MDA0MGMyOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXNVo1L2l5ZXA0a2NjY2tybHRMdUhCeHJ2cW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGZwOGNwaURVaXY2c2wrVHZCRWVMN0lOYy84PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlMxTUhSQTVaIiwibWUiOnsiaWQiOiI5NDcxOTEyMzA3Njo3MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJJbmRpdyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFMvNzdNRUVLYVJuN1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWG1BcHR6Q1hITEkwa2FUOGNraW54YzZBSGdjd0pOZFdHc0xBY2ZWeUhGTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiLzVQOWdBWndvbFhWS3djc3Nta2ZlS0c4UXNwcElOVHBlTGlHMUhKTEY2ZkljdmwzSlNFWjZKR0tkZ0tWTzNWc2ZrcGJ5YUNhNE9idGVqaTlSNndIREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImhCMnRmajQ5aUVaMDJiVC9FYWx1aUNEL2RnMVRDRHc1ejF2clJUTWVwMGxqaVgvcGJMWUFXYjJhNDNQclBJaERJTTEwb2lKNWl5VXN4d3QrT1lkdGpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTkxMjMwNzY6NzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjVnS2Jjd2x4eXlOSkdrL0hKSXA4WE9nQjRITUNUWFZockN3SEgxY2h4VCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDE3NDc3MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHdGsifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || " ~ GENERATED BY DAII ~",
  author: process.env.PACK_AUTHER || "𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐃AII",
  ownername: process.env.OWNER_NAME || "𝐃A𝐈I",
  errorChat: process.env.ERROR_CHAT || "94719123076",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
