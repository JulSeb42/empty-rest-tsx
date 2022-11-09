/*=============================================== App ===============================================*/

import express from "express"
import "dotenv/config"

import "./db"
import config from "./config"
import errorHandler from "./error-handling"

import router from "./routes"

const app = express()

config(app)

app.use("/api", router)

errorHandler(app)

export default app
