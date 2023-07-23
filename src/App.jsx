import NavBar from "./components/Navbar"
import Router from "./components/RouteManagement"
import Footer from "./components/Footer"

import "./style/Global.scss"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  )
}

export default App;
