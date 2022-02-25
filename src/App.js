import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import ItemListContainer from "./components/IemListContainer"


const App = () =>  {


    return (
    <>
    <NavBar/>
    <Main nombre="Lucia" edad={25}/>
    <ItemListContainer/>
    <Footer/>
    </>
    )
    
} 

// module.export = App
export default App

