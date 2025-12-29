import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import routerPost from "./routes/post.route.js"


dotenv.config();


const server = express();


server.use(morgan("dev"));
server.use(express.urlencoded({extended:false}));
server.use(express.json());

//routes

server.use('/api/v1',routerPost);



const port = process.env.PORT || 4000;

server.listen(port, ()=> console.log(`server running on port ${port}`));
