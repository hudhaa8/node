import express from 'express';
import { client } from '../index.js';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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
    //get this data (username, password) from postman body -destructuring
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
    const userFromDB = await client.db("new").collection("users").findOne({username : username});
    console.log(userFromDB);
    if(!userFromDB) {
      response.status(401).send({mesaage : "Invalid Credential"})
    } else {
      const storedPassword = userFromDB.password; // hashed password
      const isPasswordmatch = await bcrypt.compare(password,storedPassword)
      console.log("isPasswordmatch",isPasswordmatch )

      if(isPasswordmatch){
        const token = jwt.sign({id : userFromDB._id },process.env.SECRET_KEY)
        response.send({message : "Successful Login" , token:token})
      } else {
        response.status(401).send({mesaage : "Invalid Credential"})
      }
      // response.send(userFromDB)
    }
   
  });
  
  export const usersRouter = router
  //import at index.js

