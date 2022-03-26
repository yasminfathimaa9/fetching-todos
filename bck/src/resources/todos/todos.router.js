const { Router} = require("express")

const { getTodos,postTodo } = require("./todos.controller");

const router = Router();

router.route("/")
     .get(getTodos)
     .post(postTodo)



module.exports = router;