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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_25_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI2LFxuICAgICAgICA4MixcbiAgICAgICAgMjA2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYwLFxuICAgICAgICA2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyLFxuICAgICAgICA1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg4LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNixcbiAgICAgICAgMTAxLFxuICAgICAgICA5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc0LFxuICAgICAgICAyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiaEgyam9GczBhOUZXR3V6Z0liMjFOcnhrajYzNmk5MXNMNzU5Z3dkSG1jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEWWREV2tNX1RTQ0hTZkhhWHVtTl9BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk5NjNlYTRhLTE3MjEtNDc3MS04ZmM4LTA3MmMwOTMzMmRhNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDEzMCxcbiAgICAgIDIyOSxcbiAgICAgIDEyMyxcbiAgICAgIDMxLFxuICAgICAgOTUsXG4gICAgICA5OCxcbiAgICAgIDEwLFxuICAgICAgMTA1LFxuICAgICAgMTUsXG4gICAgICAyNDgsXG4gICAgICA3MyxcbiAgICAgIDEwMyxcbiAgICAgIDIxNSxcbiAgICAgIDM2LFxuICAgICAgOTQsXG4gICAgICAxMzksXG4gICAgICA2OSxcbiAgICAgIDE0MSxcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDEyLFxuICAgICAgMTUyLFxuICAgICAgMTEzLFxuICAgICAgNjgsXG4gICAgICAyMixcbiAgICAgIDIzNCxcbiAgICAgIDUwLFxuICAgICAgMTc0LFxuICAgICAgNTUsXG4gICAgICAxMzcsXG4gICAgICAxMzcsXG4gICAgICAyMDEsXG4gICAgICAxNTYsXG4gICAgICAzMCxcbiAgICAgIDE3MSxcbiAgICAgIDEzMixcbiAgICAgIDI0MSxcbiAgICAgIDEzNixcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJYTkJBN0FYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NTg3NzEyOTI6NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU0MDc2OTk0MDI4MjE6NjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVMrcEw4TEVKYVdzYlFHR0YwZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5eko2SUJMcVpKWFdYM0ExYWp2M1FIN1RnY1ZRZkc5OUJUSW9NK004WkJzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImI2U2ZoeFRKRWNZTG5xdnRscktoZ3d1WUptVXc4WkV3eEZjcVhnTFo1ejZIVEIyRis0S3pna1laM0hYVXQ3RzZ6RlBBMnFpczhqRXd1Wnk3UkJSSmpBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtteFpXWmd1dkxWaTRWUktReStLTlNDYVQzdXZpWEZHOVZsR0FHeHpOSWZLVjcxcHhCd1NnT3pheEVyUUJlNFN2SEVvMUpoZlVTcGxUaXN3cmpWUml3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1ODc3MTI5Mjo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDcwMjk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzRVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPNFUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1QkJjNmFldFlvUXRpeEF5S083RU5HRXpwZVZuaG0rL1NnTFNzWThRNW5JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwODU1MDgzNTYsXCJjdXJyZW50SW5kZXhcIjozOSxcImRldmljZUluZGV4ZXNcIjpbMCwzOSwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDk2NDU5NzYxODBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MOTARD",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
