import { Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer";
import Carrito from "./Carrito"

const Main = () => {

  return (
        <main>

            <Routes>
                <Route path="/" element= {<ItemListContainer/>} />

                <Route path="/categoria/:categoriaNombre" element= {<ItemListContainer/>} />
 
                <Route path="/producto/:productoId" element= {<ItemDetailContainer/>} />

                <Route path="/Cart" element= {<Carrito/>} />

            </Routes>
       
            

        </main>
  )
}

    

export default Main