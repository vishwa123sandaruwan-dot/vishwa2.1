const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "menu",
    desc: "Displays all available commands",
    category: "main",
    filename: __filename,
  },
  async (
    danuwa,
    mek,
    m,
    {
      from,
      reply
    }
  ) => {
    try {
      const categories = {};

      for (let cmdName in commands) {
        const cmdData = commands[cmdName];
        const cat = cmdData.category?.toLowerCase() || "other";
        if (!categories[cat]) categories[cat] = [];
        categories[cat].push({
          pattern: cmdData.pattern,
          desc: cmdData.desc || "No description"
        });
      }

      let menuText = "📋 *vishwa 2.0 විධාන මෙනුව (Menu):*\n";

      for (const [cat, cmds] of Object.entries(categories)) {
        menuText += `\n📂 *${cat.toUpperCase()} විධාන* \n`;
        cmds.forEach(c => {
          menuText += `➪ .${c.pattern} : ${c.desc}\n`;
        });
      }

      await reply(menuText.trim() + "\n\n> © ව්ශ්ව විසින් නිර්මාණය කරන ලදී. 🧬");
    } catch (err) {
      console.error(err);
      reply("❌ මෙනුව ලබා ගැනීමේදී දෝෂයක් ඇති විය.");
    }
  }
);
