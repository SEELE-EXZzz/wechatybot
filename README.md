## 游玩指南
### 写在前面 
微信机器人项目用的是wechaty iPad协议 https://wechaty.gitbook.io/wechaty/v/zh/
（支持JavaScript或者python），
charGPT的api接口用的是 https://github.com/transitive-bullshit/chatgpt-api 这个大佬的提供的api
charGPT好像也有大佬用python写了一个api
### 先前条件： 
1.下载node（如果想用charGPT的话，得保证在版本号在18以上）
https://nodejs.org/en/ 到这个网站建议选择左边那个长期稳定版。  
2.获取wechaty的token http://pad-local.com/#/tokens 到这个网站领取token。  
3.如果想用charGPT的话还需要到openAI官网注册一个账号  

### 使用步骤
1. 如果有安装git的话直接运行下面的命令就行
```
git clone https://github.com/SEELE-EXZzz/wechatybot.git
```
没有的话就点code，download zip以压缩包的方式下载，然后解压。

2.如果想用charGPT的话，用ide（没有的话记事本也行）打开node目录下的index.js文件，找到一下代码
```
const api = new ChatGPTAPIBrowser({
        email :'这里填openAI账号的邮箱',
        password : '这里填openAI账号的密码'
      })
```
将email和password的属性值换成openAI的邮箱和密码，然后在对应目录下的cmd输入node index.js。
后面的人机检验需要手动，其他自动  
找到wechatydemo目录，然后在对应目录下的cmd输入npm run demo，这时有会二维码，
建议用小号扫码，因为听说这个有封号的风险。
### 关于功能
charGPT这个很容易寄，如果想关就找到以下代码将true改为false就行
```
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
```
如果想要上传涩图就在setu目录下放涩图就行（按顺序扒，如果想随机扒就改下代码）
### 写在最后
因为token值七天过期，而且一旦运行了就不好改代码测试，所以没写多少功能，如果想了解微信机器人有啥功能可以到以下的文档看看https://wechaty.gitbook.io/wechaty/v/zh/
