import express from "express";
import logger from "./logger.js";
const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    logger.error("Error in route");
    logger.debug("DE-BUGGING")
    res.status(200).send("CHAL BATA PARTY KR LYA OHHH YEHHHH");
})


app.listen(port,()=>{
    logger.info(`server started at port ${port}`)
})