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
import ResetPassword from "./routes/ResetPassword"

import Premium from "./routes/Premium"
import Support from "./routes/Support"
import Blog from "./routes/Blog"
import Download from "./routes/Download"
import About from "./routes/About"
import Error from "./routes/Error"
import Terms from "./routes/Terms"
import Privacy from "./routes/Privacy"
import ShowNavFooter from "./components/ShowNavFooter"

import Account from "./routes/dashboard/Account"

import IosPreReleaseAnnouncement from "./routes/blog-posts/IosPreReleaseAnnouncement"
import PreReleaseReflecting from "./routes/blog-posts/PreReleaseReflecting"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BubblyHome />} />
        <Route path="*" element={<Error />} />
        
        <Route path="/lively" element={<ShowNavFooter children={<LivelyApp />} />} />
        <Route path="/lively/*" element={<ShowNavFooter children={<Error />} />} />

        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="/lively/signup" element={<SignUp />}  />
        <Route path="/lively/login" element={<LogIn />}  />
        <Route path="/lively/username" element={<Username />}  />
        <Route path="/lively/forgotpassword" element={<ForgotPassword />} />
        <Route path="/lively/resetpassword" element={<ResetPassword />} />

        {/* You know the drill... once we get Premium up and running, add this route back in! */}
        {/* <Route path="/lively/premium" element={<ShowNavFooter children={<Premium />} />} /> */}
        <Route path="/lively/support" element={<ShowNavFooter children={<Support />} />} />
        <Route path="/lively/blog" element={<ShowNavFooter children={<Blog />} />} />
        <Route path="/lively/download" element={<ShowNavFooter children={<Download />} />} />
        <Route path="/lively/about" element={<ShowNavFooter children={<About />} />} />

        <Route path="/lively/dashboard/" element={<ShowNavFooter children={<Account />} />} exact/>

        <Route path="/lively/blog/ios-pre-release-announcement" element={<ShowNavFooter children={<IosPreReleaseAnnouncement />} />} />
        <Route path="/lively/blog/pre-release-reflecting" element={<ShowNavFooter children={<PreReleaseReflecting />} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
