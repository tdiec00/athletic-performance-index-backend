import {Route, Routes} from "react-router-dom"
import Home from "./Screens/Home/Home"
import Detail from "./Screens/Detail/Detail"
import Tracker from "./Screens/Tracker/Tracker"
import SignUp from "./Screens/SignUp/SignUp"
import Login from "./Screens/Login/Login"
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
