/*=============================================== NotFound ===============================================*/

import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h1>Not found</h1>

            <p>
                This page does not exist. <Link to="/">Back to homepage.</Link>
            </p>
        </div>
    )
}

export default NotFound
