require("dotenv").config();

import express from "express";

import helmet from "helmet";
import cors from "cors";

const app = express();

//Application Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

//DataBase connection
import ConnectDB from "./database/connection";

//Microservices Routes
import Auth from "./API/Authentication/index";

//Application Routes
app.use("/auth", Auth);


//const PORT = process.port()

 
app.listen(4000, () =>
    console.log("server")
    //ConnectDB()
    //.then(() => console.log("Server is running \n DB connected"))
    //.catch(() => console.log("Server is running DB didnt connected"))
);
