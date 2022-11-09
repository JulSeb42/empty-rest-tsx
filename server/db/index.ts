/*=============================================== Connect to database ===============================================*/

import mongoose from "mongoose"

import { MONGODB_URI } from "../utils/consts"

mongoose
    .connect(MONGODB_URI)
    .then(x => {
        const dbName = x.connections[0].name
        console.log(`📥 Connected to Mongo! Database name: "${dbName}"`)
    })
    .catch(err => {
        console.error("Error connecting to mongo: ", err)
    })
