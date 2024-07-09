const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "yes"
global.save_status = process.env.AUTO_SAVE_STATUS || "yes"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_14_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDY4LFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU5LFxuICAgICAgICA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MixcbiAgICAgICAgNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NSxcbiAgICAgICAgOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1LFxuICAgICAgICA0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODksXG4gICAgICAgIDI2LFxuICAgICAgICA3NixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTc1LFxuICAgICAgICA2NixcbiAgICAgICAgMTIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDksXG4gICAgICAgIDM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNSxcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDQzLFxuICAgICAgICAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MixcbiAgICAgICAgODQsXG4gICAgICAgIDczLFxuICAgICAgICA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM4LFxuICAgICAgICAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMixcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic1drUHlpU3k2N0VBbG5JM2xJbUNPblR3aTROcXh4UFBnQzJvTnlvM3FVZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0F4TWNHQ0FTaHl6S0E1dG13Yi1lQVwiLFxuICBcInBob25lSWRcIjogXCIwYzczZjU3Ny1iODZlLTQxYjUtOGE4My03MzIyMzZlNzRmZDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMTgxLFxuICAgICAgMTQxLFxuICAgICAgNjQsXG4gICAgICAxODYsXG4gICAgICA5MSxcbiAgICAgIDIsXG4gICAgICAxMTQsXG4gICAgICAyMDQsXG4gICAgICAyMzUsXG4gICAgICAxMTYsXG4gICAgICA0MSxcbiAgICAgIDg5LFxuICAgICAgMTMxLFxuICAgICAgMTY1LFxuICAgICAgMzIsXG4gICAgICAyMTIsXG4gICAgICA3LFxuICAgICAgMTMsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDI0MyxcbiAgICAgIDE5MSxcbiAgICAgIDE3OSxcbiAgICAgIDIzMSxcbiAgICAgIDIyNSxcbiAgICAgIDIyNyxcbiAgICAgIDIzOSxcbiAgICAgIDEzLFxuICAgICAgMTQzLFxuICAgICAgMTg1LFxuICAgICAgMTAyLFxuICAgICAgMzksXG4gICAgICAxNDMsXG4gICAgICA1OSxcbiAgICAgIDE1OCxcbiAgICAgIDI1NCxcbiAgICAgIDM1LFxuICAgICAgNzYsXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQjdEOFpOQUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY3NDE5NDQ1MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiWWVtdGUgIE1pY2hlbFwiLFxuICAgIFwibGlkXCI6IFwiMjM1NzY4Mzg3Nzc2NTY4OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFBON0w4R0VLbnN0clFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmaVFxS3FVWVY0NmoyQTNWZTAvMEtnME9wM1dLOStCWFV5b1czUkxWOTB3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVXMWVMb3RqTWZMeE5Kb2xYNW4rWTVmNXA3WlhxNEVhTm1KUWpjT3BaZ2JSeEE5QkRzZHRGTHRtUHJ2a3o1TlgwaFZTcW1GQzJMdzM1NXV4Uno0R0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlovV0NTajdCK3UvUzVzVGFjdW5XNkIzWXZCL1R0Z05lcHJNWkp4Rk5qNUo0T0hzcjBZdGN5TitCNjMrbXZOaXhtM2NhenBwYUcrL0Q3MzhiVnZFMWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY3NDE5NDQ1MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1NjMyNDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNNGhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU00aC5qc29uIjogIntcImtleURhdGFcIjpcIlR6L3dwYmJINFJFenNNbnVnejJ3WjhlU1dSQ1JyaFdyVGhkQUphV0JRanM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc0NDUxMjY5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNTU3MTk4NDE2XCJ9Igp9"
  module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "YEMTE",
  ownername:process.env.OWNER_NAME|| "MICHEL",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
