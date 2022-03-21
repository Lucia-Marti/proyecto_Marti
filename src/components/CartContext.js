import { createContext, useState } from "react"

export const contexto = createContext()

//const Provider = contexto.Provider
//const Consumer = contexto.Consumer
const {Provider, Consumer} = contexto

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (producto,cantidsad) => {
        //siempre que quiero modificiar un estado y es objeto/array lo tengo que copiar
        //const copia = carrito.slice(incio, fin)
        //googlear spread operator
    }

    const valorDeContexto = {
        carrito : carrito,
        cantidad : cantidad,
        total: total
    }

    return(
        <Provider value={valorDeContexto}>
            {children}
        </Provider>

    )
}

export default CartContext