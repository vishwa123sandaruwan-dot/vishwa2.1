const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: "ai",
    alias: ["chat", "gpt"],
    desc: "Chat with the bot in Sinhala.",
    category: "main",
    filename: __filename
},
async (danuwa, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup,
    sender, senderNumber, botNumber2, botNumber, pushname,
    isMe, isOwner, groupMetadata, groupName, participants,
    groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        if (!q) return reply("Please provide a question! (උදා: .ai ඔයා කවුද?)");

        // Using a free AI API (GPT-3/4 alternative often provided by public APIs)
        // Here we use a common pattern for these bots: a free AI endpoint.
        // If this fails, we can fallback or ask for an API key.
        const data = await fetchJson(`https://api.giftedtech.my.id/api/ai/gpt4?apikey=gifted&q=${encodeURIComponent(q)}`);
        
        if (data && data.results) {
            // We can add a system prompt via the query or just hope the AI handles the language.
            // Usually, if the user asks in Sinhala, the AI responds in Sinhala.
            return await reply(data.results + "\n\n> *vishwa 2.0 AI* 🧬");
        } else {
            return reply("AI is currently unavailable. Please try again later.");
        }
    } catch (e) {
        console.log(e);
        reply("An error occurred while connecting to AI.");
    }
});
