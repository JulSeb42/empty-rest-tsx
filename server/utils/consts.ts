/*=============================================== Consts ===============================================*/

import "dotenv/config"

export const PORT = process.env.PORT || 5005

export const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/empty-rest-tsx"

export const ORIGIN = process.env.ORIGIN || "http://localhost:3000"
