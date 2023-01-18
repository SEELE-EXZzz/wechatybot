import {log, ScanStatus, WechatyBuilder} from "wechaty";
import {PuppetPadlocal} from "wechaty-puppet-padlocal";
import {dingDongBot, getMessagePayload, LOGPRE} from "./helper";
import axios from "axios"
import {FileBox} from "file-box"
const fs = require('fs')
const matchai = /^# ?/
const matchreasour = /^% ?/
const getreasour = /^资源$/
const talkmyself = '自我介绍'
const matchsetu = /涩图/
const questions = []
const contacts = []
const paths = []
let num = 0
/****************************************
 * 去掉注释，可以完全打开调试日志
 ****************************************/
// log.level("silly");

const puppet = new PuppetPadlocal({
    token: "填入token"
})

const bot = WechatyBuilder.build({
  name: "PadLocalDemo",
  puppet,
})
  .on("scan", (qrcode, status) => {
    if (status === ScanStatus.Waiting && qrcode) {
      const qrcodeImageUrl = [
        'https://wechaty.js.org/qrcode/',
        encodeURIComponent(qrcode),
      ].join('')

      log.info(LOGPRE, `onScan: ${ScanStatus[status]}(${status})`);

      console.log("\n==================================================================");
      console.log("\n* Two ways to sign on with qr code");
      console.log("\n1. Scan following QR code:\n");

      require('qrcode-terminal').generate(qrcode, {small: true})  // show qrcode on console

      console.log(`\n2. Or open the link in your browser: ${qrcodeImageUrl}`);
      console.log("\n==================================================================\n");
    } else {
      log.info(LOGPRE, `onScan: ${ScanStatus[status]}(${status})`);
    }
  })

  .on("login", (user) => {
    log.info(LOGPRE, `${user} login`);
  })

  .on("logout", (user, reason) => {
    log.info(LOGPRE, `${user} logout, reason: ${reason}`);
  })

  .on("message", async (message) => {
    let text = message.text()
    let contact:any = message.talker()
    if(text === talkmyself){
      message.say(`关注纯希喵，https://github.com/SEELE-EXZzz`)
    }
    if(matchsetu.test(text)){
       fs.readdir('../setu/',(err,file)=>{
            file.forEach((file,index)=>{
              let path =`../setu/${file}`
              paths.push(path)
              num += 1
            })
            const fileBox = FileBox.fromFile(paths[num]);
            message.say(fileBox)
          })
    }
    if (matchai.test(text)){
        if(true){
          let question = text.replace(/#/,'')
          questions.push(question)
          contacts.push(contact)
          message.say(`@${contact},请稍等ai回答问题需要一点时间`)
          const getanswear = function (): any {
            axios.get('http://localhost:3000',{params:{question:questions[0]}}).then(async (res)=>{
              let data = await res.data
              questions.shift()
              message.say(`@${contact}：${data}`)
              contacts.shift()
              if(questions.length !== 0){
                getanswear()
              }
            })
          }
          if(questions.length ===1){
            getanswear()
          }
        }else {
          message.say('AI寄辣')
        }
    }
    if(matchreasour.test(text)){
      let reasour = text.replace(/%/,'')
      let reasours = '/n' + reasour
      fs.appendFile('./reasour.txt',`\r${reasours}`,()=>{
        message.say('成功写入')
      })
    }
    if(getreasour.test(text)){
      fs.readFile('./reasour.txt','utf8',(err,data)=>{
        if(err)throw err
        let resour = data.replace(/\n/,'')
        message.say(resour)
      })
    }


    // log.info(LOGPRE, `on message: ${message.toString()}`);

    await getMessagePayload(message);

    await dingDongBot(message);
  })

  .on("room-invite", async (roomInvitation) => {
    log.info(LOGPRE, `on room-invite: ${roomInvitation}`);
  })

  .on("room-join", (room, inviteeList, inviter, date) => {
    log.info(LOGPRE, `on room-join, room:${room}, inviteeList:${inviteeList}, inviter:${inviter}, date:${date}`);
  })

  .on("room-leave", (room, leaverList, remover, date) => {
    log.info(LOGPRE, `on room-leave, room:${room}, leaverList:${leaverList}, remover:${remover}, date:${date}`);
  })

  .on("room-topic", (room, newTopic, oldTopic, changer, date) => {
    log.info(LOGPRE, `on room-topic, room:${room}, newTopic:${newTopic}, oldTopic:${oldTopic}, changer:${changer}, date:${date}`);
  })

  .on("friendship", (friendship) => {
    log.info(LOGPRE, `on friendship: ${friendship}`);
  })

  .on("error", (error) => {
    log.error(LOGPRE, `on error: ${error}`);
  })

bot.start().then(() => {
  log.info(LOGPRE, "started.");
});
