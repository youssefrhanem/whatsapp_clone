import app from "./app.js"
import dotenv from "dotenv"

// fotEnv config
dotenv.config();

// env Variables
const PORT = process.env.PORT || 8000;


app.listen(PORT, ()=> {
    console.log(`server is listening at ${PORT}`);
});
