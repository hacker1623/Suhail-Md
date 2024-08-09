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
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_41_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk3LFxuICAgICAgICA2NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDU5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkxLFxuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjExLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDgxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM4LFxuICAgICAgICA0OSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDM0LFxuICAgICAgICA4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU5LFxuICAgICAgICA2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDg5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSURXTTJRRHhOQjhPQ0hMOXJSMnVXNUw4a21JTzdsTVpKVDZBWG1GRGkrcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNFViaW1JRzdSZ09yd0tXaTBsNG01QVwiLFxuICBcInBob25lSWRcIjogXCJhODQ4MDc0Ny01N2UzLTQxMjktYjM3NS0xNTQzYjI2NjAyZGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODQsXG4gICAgICAyNSxcbiAgICAgIDIzOSxcbiAgICAgIDEwLFxuICAgICAgMjEwLFxuICAgICAgMTkzLFxuICAgICAgNzEsXG4gICAgICAyMDQsXG4gICAgICA2MixcbiAgICAgIDEwLFxuICAgICAgMTgxLFxuICAgICAgMTY0LFxuICAgICAgMjMwLFxuICAgICAgMjU1LFxuICAgICAgMjQ2LFxuICAgICAgMTk0LFxuICAgICAgMTcyLFxuICAgICAgMTYxLFxuICAgICAgMTQwLFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg3LFxuICAgICAgMTkyLFxuICAgICAgNSxcbiAgICAgIDI0LFxuICAgICAgMTk2LFxuICAgICAgMTczLFxuICAgICAgMTIwLFxuICAgICAgMjMyLFxuICAgICAgMjMxLFxuICAgICAgMTY2LFxuICAgICAgMTMwLFxuICAgICAgMTI2LFxuICAgICAgMjMzLFxuICAgICAgMTA5LFxuICAgICAgMjI2LFxuICAgICAgMTExLFxuICAgICAgMjIsXG4gICAgICAxNzksXG4gICAgICAxNzIsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lTK3BMOExFTzcyMUxVR0dHTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieXpKNklCTHFaSlhXWDNBMWFqdjNRSDdUZ2NWUWZHOTlCVElvTStNOFpCcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZVWs0dmU4T2VWclRZdXdXajVZVWdEM2VxRW1qTVZPWjNFOVRJbEV3ekJ3ZGR1ckhseVN5WXhsVkRvKzMwSzFZRFJQYlY1eUtRNUUyT0VLLzFSbG1oZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPMUs4TVRNVDlzQlBaTGppdE53YWlGUVdMMFR6Z0RxaFdKeStIQWhnTmFvQUwyUU5tdzR0QnZpV3FvbFRYQWNxMnpuU1lnc0lHSUFzMm1vUnlmaU5Bdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1ODc3MTI5Mjo3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTQwNzY5OTQwMjgyMTo3NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1ODc3MTI5Mjo3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMTUzMjY2XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
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
