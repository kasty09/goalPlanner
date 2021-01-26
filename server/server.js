const express = require('express')
const mongoose = require('mongoose')
const goalRouter = require('./routers/goalRouter')
const app = express()
const connect = 'mongodb+srv://kasti:333009@cluster0.khvqy.mongodb.net/goal-planner?retryWrites=true&w=majority'

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "*")
  res.setHeader("Access-Control-Allow-Headers", "content-type")
    next()
  })

app.use(express.urlencoded({extended: true}))
app.use('/goals/', goalRouter)
const PORT = process.env.PORT || 3000


async function start () {
  try {
    await mongoose.connect(connect, { useNewUrlParser: true, useUnifiedTopology: true })
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}
start()
