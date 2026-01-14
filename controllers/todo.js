//so everytime you hit the post request you clear the cache.
//if there is a get request you check the cache and if its already there you return from the cache else you fetch it from the database 
//2.what difference that is make when you fetch from cache and db
//suppose if you use an mongodb you have to again send an request to it and lookup the details but here you just store in the servers memory 
//and its fast
const NodeCache = require("node-cache");
// stdTTL = standard time-to-live (seconds)
const todoCache = new NodeCache({ stdTTL: 60 }); // cache expires after 60 seconds
const TODO=require('../models/todo')
async function getallthelist(req,res)
{
    const cachedtodos=todoCache.get("todos")
    if(cachedtodos)
    {
        console.log("serving from cached memory")
        return res.json(cachedtodos)
    }
    const todos=await TODO.find();
    todoCache.set("todos", todos);
    res.send(todos)


}
async function addtodb(req,res)
{
    const body=req.body
    await TODO.create({
        task:body.task,
        deadline:body.deadline
    })
    todoCache.del("todos");
    res.send("added succesfully")

}
module.exports={getallthelist,addtodb}