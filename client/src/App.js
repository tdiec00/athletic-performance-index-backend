import {Route, Routes} from "react-router-dom"
import Home from "./Screens/Home/Home"
import Back from "./Screens/Back/Back"
import Tricep from "./Screens/Tricep/Tricep"
import Bicep from "./Screens/Bicep/Bicep"
import Chest from "./Screens/Chest/Chest"
import Detail from "./Screens/Detail/Detail"
import Shoulder from "./Screens/Shoulder/Shoulder"
import Leg from "./Screens/Leg/Leg"
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
        <Route path="/back" element={<Back />} />
        <Route path="/leg" element={<Leg />} />
        <Route path="/tricep" element={<Tricep />} />
        <Route path="/bicep" element={<Bicep />} />
        <Route path="/shoulder" element={<Shoulder />} />
        <Route path="/chest" element={<Chest />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
