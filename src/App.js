import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import {BrowserRouter} from "react-router-dom"

const App = () =>  {
    return (
        <BrowserRouter>
            <NavBar/>
            <Main/>
            <Footer/>
        </BrowserRouter>
    )
    
} 

export default App

