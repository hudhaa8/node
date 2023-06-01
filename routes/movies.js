import express from 'express';
import {auth} from "../middleware/auth.js"
import { ObjectId } from 'mongodb';
import { client } from '../index.js';
const router = express.Router()
// it is important to change path ""/movies/:id" to "/:id"

//get api
router.get("/:id", async function (request, response) {
    console.log(request.params);
    // by using obj destructuring take id
    const { id } = request.params;
    // const movie = movies.find((mv)=> mv.id === id)
    const movie = await client.db("new").collection("movies").findOne({ _id: new ObjectId(id) });
   movie ? response.send(movie) : response.status(404).send({ message: "No such movie found 🌝" });
    // console.log(movie);
    
  });

  //post api
  router.post("/", async function (request, response) {
    //dn.movies.insertMany({})
    const data = request.body;
    console.log(data);
    const movie = await client.db("new").collection("movies").insertMany(data);
    response.send(movie);
  });
  //auth in the middle
  router.get("/", async function (request, response) {
    const movie = await client.db("new").collection("movies").find({}).toArray();
    response.send(movie);
  });
  
  //delelte one movie by id
  router.delete("/:id", async function (request, response) {
    //dn.movies.deleteOne({id :"102"})
    console.log(request.params);
    // by using obj destructuring take id
    const { id } = request.params;
    //const movie = movies.find((mv)=> mv.id === id)
    const movie = await client
      .db("new")
      .collection("movies")
      .deleteOne({ _id: new ObjectId(id) });
    response.send(movie);
  });
  
  //delete all movies
  router.delete("/", async function (request, response) {
    //dn.movies.deleteMany({})
    const movie = await client
      .db("new")
      .collection("movies")
      .deleteMany({});
    response.send(movie);
  });
  
  //update movie by id
  router.put("/:id", async function (request, response) {
    //dn.movies.updateOne({id : "102"}, {$set : updated data})
    console.log(request.params);
    // by using obj destructuring take id
    const { id } = request.params;
    const updatedData = request.body;
    const movie = await client
      .db("new")
      .collection("movies")
      .updateOne({ _id: new ObjectId(id)},{$set : updatedData});
    response.send(movie);
  });
  
  export const moviesRouter = router

