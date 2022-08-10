import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import BubblyHome from "./BubblyHome"

import LivelyApp from "./LivelyApp"
import SignUp from "./routes/SignUp"
import LogIn from "./routes/LogIn"
import Username from "./routes/Username"
import ForgotPassword from "./routes/ForgotPassword"

import Premium from "./routes/Premium"
import Support from "./routes/Support"
import Blog from "./routes/Blog"
import Download from "./routes/Download"
import About from "./routes/About"
import Error from "./routes/Error"
import Terms from "./routes/Terms"
import Privacy from "./routes/Privacy"
import ShowNavFooter from "./routes/ShowNavFooter"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowNavFooter children={<BubblyHome />} />} />
        <Route path="/lively" element={<ShowNavFooter children={<LivelyApp />} />} />
        <Route path="/lively/signup" element={<SignUp />}  />
        <Route path="/lively/login" element={<LogIn />}  />
        <Route path="/lively/username" element={<Username />}  />
        <Route path="/lively/forgotpassword" element={<ForgotPassword />} />

        <Route path="/lively/premium" element={<ShowNavFooter children={<Premium />} />} />
        <Route path="/lively/support" element={<ShowNavFooter children={<Support />} />} />
        <Route path="/lively/blog" element={<ShowNavFooter children={<Blog />} />} />
        <Route path="/lively/download" element={<ShowNavFooter children={<Download />} />} />
        <Route path="/lively/about" element={<ShowNavFooter children={<About />} />} />
        <Route path="/lively/terms" element={<ShowNavFooter children={<Terms />} />} />
        <Route path="/lively/privacy" element={<ShowNavFooter children={<Privacy />} />} />
        <Route path="*" element={<ShowNavFooter children={<Error />} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
