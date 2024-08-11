import "./App.css"
import About from "./compontents/About"
import Contact from "./compontents/Contact"
import Exp from "./compontents/Exp"
import Footer from "./compontents/Footer"
import Header from "./compontents/Header"
import Home from "./compontents/Home"
import Projects from "./compontents/Projects"

const App = () => {
  return (
    <> 
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Exp/>
        <Contact/>
        <Footer/>
    </>
)
}

export default App