import ReactDOM from "react-dom/client"
import { App } from "./app"
import "./index.css"

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

const root = document.getElementById("root")

if (!root) {
  throw new Error("App is not attached to the element with id='root'")
}

ReactDOM.createRoot(root).render(
  <Router>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </Router>
)
