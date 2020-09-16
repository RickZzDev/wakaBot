const jimp = require('jimp')
const { composite } = require('jimp')

async function main(){

    let fonte = await jimp.loadFont(jimp.FONT_SANS_128_BLACK)
    let avatar = await jimp.read('./assets/imgBot.jpg')
    let avatar2 = await jimp.read('./assets/imgBot2.jpg')
    let fundo = await jimp.read('./assets/fundo.jpg')
    avatar.write('beta.png')
    // avatar2.resize(350,250)
    // fundo.resize(700,700)
    // avatar.write('beta.png')

    // fundo.composite(avatar2,0,0)
    // fundo.composite(avatar,500,0).write('beta.png')
    
    // jimp.read('').then(avatar => {
    //     avatar.resize(250, 250)
    //     avatar.write('beta.png')
    // }).catch(err => {
    //     console.log(err)
    // })
   
}

main()