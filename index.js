
// // below the code is understandable, old format


// import express from "express"; // "type" : "module"
// // const express = require("express");
// import { MongoClient } from "mongodb";
// import cors from 'cors'
// import dotenv from 'dotenv'
// dotenv.config();

// // console.log(process.env)
// console.log(process.env.MONGO_URL)

// const app = express();

// // const PORT = 4000 
// const PORT = process.env.PORT;

// const movies = [
//   {
//     id: "100",
//     name: "Iron man 2",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//     rating: 7,
//     summary:
//       "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//     trailer: "https://www.youtube.com/embed/wKtcmiifycU",
//   },
//   {
//     id: "101",
//     name: "No Country for Old Men",
//     poster:
//       "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//     rating: 8.1,
//     summary:
//       "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     trailer: "https://www.youtube.com/embed/38A__WT3-o0",
//   },
//   {
//     id: "102",
//     name: "Jai Bhim",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//     summary:
//       "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//     rating: 8.8,
//     trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
//   },
//   {
//     id: "103",
//     name: "The Avengers",
//     rating: 8,
//     summary:
//       "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//     poster:
//       "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
//   },
//   {
//     id: "104",
//     name: "Interstellar",
//     poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//     rating: 8.6,
//     summary:
//       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//     trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
//   },
//   {
//     id: "105",
//     name: "Baahubali",
//     poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//     rating: 8,
//     summary:
//       "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
//   },
//   {
//     id: "106",
//     name: "Ratatouille",
//     poster:
//       "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//     rating: 8,
//     summary:
//       "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//     trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
//   },
// ];

// // const MONGO_URL = "mongodb://localhost";
// // const MONGO_URL = "mongodb+srv://user1:Arrismaa@cluster0.y1tvm.mongodb.net/?retryWrites=true&w=majority";
// const MONGO_URL = process.env.MONGO_URL;
// app.use(express.json());
// app.use(cors());

// // to connect mongodb and node
// async function createConnection() {
//   const client = new MongoClient(MONGO_URL);
//   await client.connect();
//   console.log("Mongo is connected🎉🌹✌");
//   return client;
// }
// const client = await createConnection();

// app.get("/", function (request, response) {
//   response.send("Hello World");
// });
// // to get output localhost:4000/movies
// // app.get("/movies", function (request, response) {
// //   response.send(movies);
// // });

// //to get output localhost:4000/movies/101
// app.get("/movies/:id", async function (request, response) {
//   console.log(request.params);
//   // by using obj destructuring take id
//   const { id } = request.params;
//   // const movie = movies.find((mv)=> mv.id === id)
//   const movie = await client.db("new").collection("movies").findOne({ id: id });
//   movie
//     ? response.send(movie)
//     : response.status(404).send({ message: "No such movie found 🌝" });
// });

// app.post("/movies", async function (request, response) {
//   //dn.movies.insertMany({})
//   const data = request.body;
//   console.log(data);
//   const movie = await client.db("new").collection("movies").insertMany(data);
//   response.send(movie);
// });

// app.get("/movies", async function (request, response) {
//   const movie = await client.db("new").collection("movies").find({}).toArray();
//   response.send(movie);
// });

// //delelte one movie by id
// app.delete("/movies/:id", async function (request, response) {
//   //dn.movies.deleteOne({id :"102"})
//   console.log(request.params);
//   // by using obj destructuring take id
//   const { id } = request.params;
//   //const movie = movies.find((mv)=> mv.id === id)
//   const movie = await client
//     .db("new")
//     .collection("movies")
//     .deleteOne({ id: id });
//   response.send(movie);
// });

// //delete all movies
// app.delete("/movies/", async function (request, response) {
//   //dn.movies.deleteMany({})
//   const movie = await client
//     .db("new")
//     .collection("movies")
//     .deleteMany({});
//   response.send(movie);
// });

// app.put("/movies/:id", async function (request, response) {
//   //dn.movies.updateOne({id : "102"}, {$set : updated data})
//   console.log(request.params);
//   // by using obj destructuring take id
//   const { id } = request.params;
//   const updatedData = request.body;
//   const movie = await client
//     .db("new")
//     .collection("movies")
//     .updateOne({ id: id },{$set : updatedData});
//   response.send(movie);
// });

// app.listen(PORT, () => {
//   console.log(`server running in ${PORT}✌`);
// });



// below the code is optimized (this is optonal ) otherwise you can use top code 

import express from "express"; // "type" : "module"
// const express = require("express");
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import {moviesRouter} from  "./routes/movies.js";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// console.log(process.env)
console.log(process.env.MONGO_URL)

const app = express();

// const PORT = 4000 
const PORT = process.env.PORT;

const movies = [
  {
    id: "100",
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU",
  },
  {
    id: "101",
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: "https://www.youtube.com/embed/38A__WT3-o0",
  },
  {
    id: "102",
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
  },
  {
    id: "103",
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
  },
  {
    id: "104",
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: "105",
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
  },
  {
    id: "106",
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
  },
];

// const MONGO_URL = "mongodb://localhost";
// const MONGO_URL = "mongodb+srv://user1:Arrismaa@cluster0.y1tvm.mongodb.net/?retryWrites=true&w=majority";
const MONGO_URL = process.env.MONGO_URL;
app.use(express.json());
app.use(cors());

// to connect mongodb and node
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected🎉🌹✌");
  return client;
}
export const client = await createConnection();

app.get("/", function (request, response) {
  response.send("Hello World");
});
// to get output localhost:4000/movies
// app.get("/movies", function (request, response) {
//   response.send(movies);
// });

app.use("/movies", moviesRouter)

app.listen(PORT, () => {
  console.log(`server running in ${PORT}✌`);
});

async function genPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password,salt)
  console.log({salt, hashPassword})
}
genPassword("password@123")
