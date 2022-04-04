import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import {BrowserRouter} from "react-router-dom"
import CartContext from "./context/CartContext"

const App = () =>  {
    return (
        <CartContext>
            <BrowserRouter >
                <NavBar/>
                <Main />
                <Footer/>
            </BrowserRouter>
        </CartContext>
    )
} 

export default App

