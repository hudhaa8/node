import express from 'express';

const router = express.Router()

import { client } from '../index.js';

  //post api for signup user
  router.post("/signup", async function (request, response) {
    //dn.movies.insertMany({})
    const data = request.body;
    console.log(data);
    const result = await client.db("new").collection("users").insertOne(data);
    response.send(result);
  });
  
  
  export const usersRouter = router
  //import at index.js

