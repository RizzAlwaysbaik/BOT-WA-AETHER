global.owner = ['6281573789697', '6285798045817', '6285864727063']  
global.mods = ['6281573789697', '6285798045817', '6285864727063'] 
global.prems = ['6281573789697', '6285798045817', '6285864727063']
global.nameowner = 'Flyrizz'
global.numberowner = '6285798045817'
global.mail = 'rizmau989@gmail.com' 
global.gc = '-'
global.instagram = 'https://instagram.com/ikyy_dasee67'
global.wm = '© Flyrizz'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.maxwarn = '2' // Peringatan maksimum
global.antiporn = false // Auto delete pesan porno (bot harus admin)

//INI WAJIB DI ISI!//
global.lann = 'YOUR_APIKEY_HERE' 
//Daftar terlebih dahulu https://api.betabotz.eu.org 

//INI OPTIONAL SIH BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'YOUR_APIKEY_HERE'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'YOUR_APIKEY_HERE', 
  'https://api.botcahx.eu.org': 'YOUR_APIKEY_HERE'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
