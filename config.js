const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/vishwa123sandaruwan-dot/lastbot/15ddd02dbd5fe108ef5c379585296c68a8863cf4/vishwa%202.0.png",
    ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 vishwa 2.0 Is Alive Now😍*",
    BOT_OWNER: '94741814489',  // Replace with the owner's phone number



};
