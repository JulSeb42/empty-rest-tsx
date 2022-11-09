/*=============================================== App ===============================================*/

import React from "react"
import { Routes, Route } from "react-router-dom"
import { uuid } from "./utils"

import routes from "./routes/routes"

const App = () => {
    return (
        <Routes>
            {routes.map(route => (
                <Route
                    path={route.path}
                    element={<route.element />}
                    key={uuid()}
                />
            ))}
        </Routes>
    )
}

export default App
