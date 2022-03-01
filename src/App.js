import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import ItemListContainer from "./components/ItemListContainer"


const App = () =>  {


    return (
    <>
    <NavBar/>
    <Main nombre="Lucia" edad={25}/>
    <ItemListContainer greeting="Bienvenidos al catalogo de" marca= "Blue"/>
    <Footer/>
    </>
    )
    
} 

// module.export = App
export default App

