import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import App from "./App"
import Download from "./routes/Download"
import Premium from "./routes/Premium"
import Support from "./routes/Support"
import Blog from "./routes/Blog"
import Error from "./routes/Error"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/lively" element={<App />} />
        <Route path="/download" element={<Download />}  />
        <Route path="/premium" element={<Premium />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
)