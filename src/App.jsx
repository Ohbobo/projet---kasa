import NavBar from "./components//Navbar/Navbar"
import Router from "./components/Routes/RouteManagement"
import Footer from "./components/Footer/Footer"

import "./style/Global.scss"

function App() {
  return (
    <div className="App">
      <main className="main-container">
      <NavBar />
      <Router />
      </main>
      <Footer />
    </div>
  )
}

export default App;
