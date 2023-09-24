import express from "express"
import dotenv from "dotenv"
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from 'express-mongo-sanitize'
import cookieParser from "cookie-parser";
import compression from 'compression';
import fileUpload from 'express-fileupload';
import cors from 'cors';

// fotEnv config
dotenv.config();


// create express app
const app = express();

//Morgan (combined, default, dev)
if(process.env.NODE_ENV !== "production"){
    app.use(morgan("dev"));
}

//Helmet
app.use(helmet());

//Parse Json request body
//Analyse du corps JSON de la requête
app.use(express.json());

//Parse Json request url
app.use(express.urlencoded({extended: true}));

//sanitize request data
app.use(mongoSanitize());

//Enable cookie Parser
app.use(cookieParser());

//gzip compression
app.use(compression())

//file upload
// useTempFiles create a tem file in the project root dir
app.use(fileUpload({
    useTempFiles: true,
}));

//cors
app.use(cors({
    origin: "http://localhosr:3000"
}));

app.get('/', (req,res) => {
    res.send('hello from server');
});


export default app;