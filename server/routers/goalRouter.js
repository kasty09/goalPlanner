const {Router} = require('express')
const bodyParser = require('body-parser')
const router = Router()
const Goal = require('../models/Goal')

const jsonParser = bodyParser.json()

router.post('/get-all',(req,res) => {
  res.send({
    hello: 'world-one'
  })
})

router.post('/add', jsonParser, async (req, res) => {
  let data = {
    status: 'ok',
    description: 'goal is saved'
  }
  try {
    const goal = new Goal({
      title: req.body.title,
      viewType: req.body.viewType,
      isActive: req.body.isActive,
      isCompleted: req.body.isCompleted
    })
    await goal.save()
    data.goal = goal
  } catch (e) {
    data.status = 'error'
    data.description = e
  }
  res.send(data)
})

module.exports = router
