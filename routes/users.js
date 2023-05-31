import express from 'express';

const router = express.Router()

import { client } from '../index.js';

// it is important to change path ""/movies/:id" to "/:id"



  //post api
  router.post("/signup", async function (request, response) {
    //dn.movies.insertMany({})
    const data = request.body;
    console.log(data);
    const user = await client.db("new").collection("users").insertOne(data);
    response.send(user);
  });
  
  
  export const usersRouter = router
  //import at index.js

