import express from 'express';
import { client } from '../index.js';
import bcrypt from "bcrypt"
const router = express.Router()

async function genPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password,salt)
  // console.log({salt, hashPassword})
  return hashPassword;
}
// genPassword("password@123")

  //post api for signup user
  router.post("/signup", async function (request, response) {
    //db.users.insertOne({})
    //this data (username, password) from postman body 
    const {username, password} = request.body;
    const hashPassword =await genPassword(password) 
    const newUser = {
      username : username,
      password : hashPassword
    }
    const result = await client.db("new").collection("users").insertOne(newUser);
    response.send(result);
  });
  

  router.post("/login", async function (request, response) {
    //db.users.findOne({username : "hudha malick"})
    const {username, password} = request.body;
    const userFromDB = await client.db("new").collection("users").findOne({username : "hudha malick"});
    console.log(userFromDB,password);
    response.send(userFromDB)
  });
  
  export const usersRouter = router
  //import at index.js

