const express = require('express');
 const cors = require('cors');
const bodyParser = require('body-parser');

const todosRouter = require('./src/resources/todos/todos.router')

const userRouter = require("./src/resources/users/user.router")

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/todos",todosRouter)
app.use("/api/users",userRouter);

app.get("/",(req,res) => res.json ({ todos}))

app.get("/api/todos", (req,res) => res.json({message : "haii"}));

 
app.listen(4003,() => console.log("port 4003 is listening"))








