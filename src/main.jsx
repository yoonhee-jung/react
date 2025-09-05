


import { StrictMode } from "react"
import {createRoot} from "react-dom/client"
import Router from "./router/Router.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router></Router>
  </StrictMode>
)
