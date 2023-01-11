import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LivelyApp from "./LivelyApp"

import SignUp from "./routes/SignUp"
import LogIn from "./routes/LogIn"
import Username from "./routes/Username"
import ForgotPassword from "./routes/ForgotPassword"

import Support from "./routes/Support"
import Blog from "./routes/Blog"
import Download from "./routes/Download"
import About from "./routes/About"
import Error from "./routes/Error"
import Terms from "./routes/Terms"
import Privacy from "./routes/Privacy"
import ShowNavFooter from "./components/ShowNavFooter"
import Acknowledgements from "./routes/Acknowledgements"

import Account from "./routes/dashboard/Account"

import IosPreReleaseAnnouncement from "./routes/blog-posts/IosPreReleaseAnnouncement"
import PreReleaseReflecting from "./routes/blog-posts/PreReleaseReflecting"
import CelebrateAppRelease from "./routes/blog-posts/CelebrateAppRelease"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowNavFooter children={<LivelyApp />} />} />
        <Route path="/*" element={<ShowNavFooter children={<Error />} />} />

        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="/signup" element={<SignUp />}  />
        <Route path="/login" element={<LogIn />}  />
        <Route path="/username" element={<Username />}  />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route path="/support" element={<ShowNavFooter children={<Support />} />} />
        <Route path="/blog" element={<ShowNavFooter children={<Blog />} />} />
        <Route path="/download" element={<ShowNavFooter children={<Download />} />} />
        <Route path="/about" element={<ShowNavFooter children={<About />} />} />
        <Route path="/acknowledgement" element={<ShowNavFooter children={<Acknowledgements />} />} />

        <Route path="/dashboard/" element={<ShowNavFooter children={<Account />} />} exact/>

        <Route path="/blog/ios-pre-release-announcement" element={<ShowNavFooter children={<IosPreReleaseAnnouncement />} />} />
        <Route path="/blog/pre-release-reflecting" element={<ShowNavFooter children={<PreReleaseReflecting />} />} />
        <Route path="/blog/celebrate-app-release" element={<ShowNavFooter children={<CelebrateAppRelease />} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
