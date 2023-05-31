import express from 'express';
import { client } from '../index.js';
import bcrypt from "bcrypt"
const router = express.Router()

async function genPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password,salt)
  console.log({salt, hashPassword})
}
// genPassword("password@123")

  //post api for signup user
  router.post("/signup", async function (request, response) {
    //dn.movies.insertMany({})
    //this data (username, password) from postman body 
    // const data = request.body;
    const {username, password} = request.body;
    const hashPassword = genPassword(password) 
    const newUser = {
      username : username,
      password : hashPassword
    }
    const result = await client.db("new").collection("users").insertOne(newUser);
    response.send(result);
  });
  
  
  export const usersRouter = router
  //import at index.js

