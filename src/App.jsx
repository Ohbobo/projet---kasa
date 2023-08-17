import NavBar from "./components//Navbar/Navbar"
import Router from "./routes/Routes/RouteManagement"
import Footer from "./components/Footer/Footer"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

import "./style/Global.scss"

function App() {
  return (
    <div className="App">
          <ScrollToTop>
            <main className="main-container">
            <NavBar />
            <Router />
            </main>
          </ScrollToTop>
          <Footer />
    </div>
  )
}

export default App;
