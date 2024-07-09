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
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_33_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMjI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NixcbiAgICAgICAgMjIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NixcbiAgICAgICAgMTY0LFxuICAgICAgICA1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM5LFxuICAgICAgICA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkwLFxuICAgICAgICA3NixcbiAgICAgICAgODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAzOSxcbiAgICAgICAgNixcbiAgICAgICAgODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk1LFxuICAgICAgICA5MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMixcbiAgICAgICAgMjE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUWJYVWlQSUJZUC9wUWRqOXhtUUhaTVlqNys0MUxoYjc1ZWx6b2ZwMU5LND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUzFzbV8xLXVSMXF4VU83enljMGh0Z1wiLFxuICBcInBob25lSWRcIjogXCJiNDRlY2FmNS1mYjRlLTQ2MGUtOGQyNi0xM2Q3NjA1NjRhZTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMTIxLFxuICAgICAgMjA1LFxuICAgICAgNDEsXG4gICAgICAxMzksXG4gICAgICAxMDksXG4gICAgICAxNzAsXG4gICAgICAxODAsXG4gICAgICAxMTMsXG4gICAgICA5MCxcbiAgICAgIDg1LFxuICAgICAgMTAsXG4gICAgICAxMTQsXG4gICAgICAyMTYsXG4gICAgICAxODksXG4gICAgICAyMTQsXG4gICAgICAxOTMsXG4gICAgICAxODMsXG4gICAgICAxMSxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICA4MyxcbiAgICAgIDExLFxuICAgICAgNzgsXG4gICAgICAyMjQsXG4gICAgICAyMTgsXG4gICAgICA1MSxcbiAgICAgIDE1OSxcbiAgICAgIDE4MSxcbiAgICAgIDEzOSxcbiAgICAgIDIxMSxcbiAgICAgIDE3OSxcbiAgICAgIDEwNCxcbiAgICAgIDI0NSxcbiAgICAgIDEzNCxcbiAgICAgIDExMyxcbiAgICAgIDE3MyxcbiAgICAgIDIwMyxcbiAgICAgIDI1NCxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lYN3VQc0tFTTNNdGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWmtLbVpXWXF4YnQwRitWVjI5cHNaZDZYcXpLN2h4MVhwSURnUGF2SkFnZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCbnFmTkNyZzdyQXlONVdYa0MxdU9xV1RpaHVBSDZHQ2pMY2FtNzBsa0FYNXd5UkR5V3UxRW51L0ZqWHFGYTVVb0NYUitXRXRvM0gwTmJyRWdET05CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmajRvS01kRlIvaXdLTjluZ3dXNDRCRDd3SDl5KzgwTkdqajZJU296VDlaQ2VDbVFQUnQ0Vmtwa1RrT2hiTENhYkdTa3FYMmFSZnNsazJnQzA4dndEdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1MzE4ODE4MDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MzE4MTcxODY4Mzg0NjozQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjUzMTg4MTgwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU0Mjc5OVxufSIKfQ=="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "HOROCHI",
  ownername:process.env.OWNER_NAME|| "ZOUME",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
