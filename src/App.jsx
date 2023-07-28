import NavBar from "./components//Navbar/Navbar"
import Router from "./components/Routes/RouteManagement"
import Footer from "./components/Footer/Footer"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import { LinkProvider } from "./components/LinkContext/linkContext"

import "./style/Global.scss"

function App() {
  return (
    <div className="App">
        <LinkProvider>
          <ScrollToTop>
            <main className="main-container">
            <NavBar />
            <Router />
            </main>
          </ScrollToTop>
          <Footer />
      </LinkProvider>
    </div>
  )
}

export default App;
