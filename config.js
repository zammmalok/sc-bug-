const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["2349026536727@s.whatsapp.net"]
global.nomerOwner = "2349026536727"
global.nomorOwner = ['2349026536727']
global.namaDeveloper = "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲" //jangn diubh bng
global.namaOwner = "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲"
global.namaBot = "𝐀𝐠𝐥𝐞𝐫 𝐅𝐨𝐫𝐠𝐞𝐫"
global.versionBot = "𝟏𝟑.𝟎.𝟎"
global.packname = "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲"
global.author = "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲"
global.thumb = fs.readFileSync("./AndraZyy.png")
global.ThM = 'https://img101.pixhost.to/images/245/549262078_skyzopedia.jpg'

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})