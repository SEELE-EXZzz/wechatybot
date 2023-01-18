import express from 'express'
import {ChatGPTAPIBrowser} from "chatgpt"
const app = express()
const port = 3000
const questions = []
// let safe = true

const api = new ChatGPTAPIBrowser({
        email :'这里填openAI账号的邮箱',
        password : '这里填openAI账号的密码'
      })
api.initSession()

// app.use('/',  (req, res, next)=> {
//   if(safe){
//     safe = false
//     next()
//   }
// })

async function example(text) { 
  let res = await api.sendMessage(text)
  // questions.unshift()
  // safe = true
  return res.response
}

app.get('/',async(req,res)=>{
  questions.push(req.query.question)
  let answear = await example(questions[0])
  res.send(answear)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



