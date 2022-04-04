import {Link} from 'react-router-dom'


const OrderExit = () => {
  return (
    <div>
      <p>Gracias por tu compra, su pedido se ha registrado con exito</p>
      <p>En breve te enviaremos un correo con la confirmación de tu pedido</p>

      <p>ID Pedido : </p>
      <Link className="volverInicio_carrito" to="/">Volver al inicio</Link>
      
    </div>
  )
}

export default OrderExit