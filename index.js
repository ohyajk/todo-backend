const cors=require("cors")
const express = require('express')
const { findOneAndDelete } = require("./schema")
require('./connect')
const Todo = require('./schema')
const app = express()
const port = 3000

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.use(express.json())
app.use(cors(corsOptions)) // Use this after the variable declaration

app.get('/', async (req, res) => {
    const getTodos = await Todo.find({})
  res.send(getTodos)
})

app.post('/', (req, res) => {
  const todo = new Todo(req.body)
  todo.save().then(() => {
    res.send('Added Successfully to DB')
  }).catch((e) => {
    res.status(404).send(e)
  })
  
})

app.delete('/:id', (req, res) => {
  let delID = req.params.id
  Todo.findOneAndDelete(({_id: delID}),function (err, todo) {console.log(err,todo)})
  res.send("DELETE Request Called")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})