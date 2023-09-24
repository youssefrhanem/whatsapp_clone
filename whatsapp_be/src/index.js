import app from "./app.js"
import logger from "./configs/logger.js"


// env Variables
const PORT = process.env.PORT || 8000;
console.log(process.env.NODE_ENV)


app.listen(PORT, ()=> {
    logger.info(`server is listening at ${PORT}`);
});
