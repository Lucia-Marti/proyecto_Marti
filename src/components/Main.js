import { Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer";
import Carrito from "./Carrito"
import Order from "./Order";
import OrderExit from "./OrderExit";

const Main = () => {
  return (
        <main>
            <Routes>
                <Route path="/" element= {<ItemListContainer/>} />

                <Route path="/categoria/:categoriaNombre" element= {<ItemListContainer/>} />
 
                <Route path="/producto/:productoId" element= {<ItemDetailContainer/>} />
                
                <Route path="/Cart" element= {<Carrito/>} />

                <Route path="/FinalizarOrden" element= {<Order/>} />

                <Route path="/OrderExit" element= {<OrderExit/>} />
            </Routes>
        </main>
  )
}

    

export default Main