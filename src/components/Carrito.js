import { useContext } from "react"
import { contexto} from "./CartContext.js"

const Carrito = () => {

  const {carrito,cantidad,total} = useContext(contexto)


  return (
    <div>carrito</div>
  )
}

export default Carrito