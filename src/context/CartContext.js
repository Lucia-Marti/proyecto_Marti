import { createContext, useState } from "react"

export const contexto = createContext()
const {Provider} = contexto

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)

    const addItem = (producto,cant) => {

        const copiaCarrito = [...carrito]
        const productoCarrito = {...producto,cant}

        setCantidad(cantidad+cant) 

        if (isInCart(producto.id)) {
            let i = copiaCarrito.findIndex(item => item.id === producto.id)
            copiaCarrito[i].cant += cant
            setCarrito(copiaCarrito)            
        } 
        else{
            copiaCarrito.push(productoCarrito)
            setCarrito(copiaCarrito)
        }
    }
    
    const isInCart = (ide) =>{
        return carrito.some(item => item.id === ide)
    } 
    
    const removeItem = (ide, cant) => {
        setCarrito(carrito.filter(i => i.id !== ide))
        setCantidad(cantidad-cant)
    }
    
    const clear = () => {
        setCarrito([])
        setCantidad(0)
    }

    const calcularTotal = () => {
        let total = 0
        carrito.forEach(i => total = (i.cant*i.price).toFixed(2))
        return total
    }

    const valorDeContexto = {
        carrito,
        cantidad,
        addItem,
        removeItem,
        clear,
        calcularTotal,
    }

    return(
        <Provider value={valorDeContexto}>
            {children}
        </Provider>

    )
}

export default CartContext