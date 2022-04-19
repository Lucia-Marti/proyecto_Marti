import {Link} from 'react-router-dom'

const OrderExit = ({ide}) => {
  return (
    <div>
      <div className='orderExit'>
      <p>Gracias por tu compra!</p>
      <p> Su pedido se ha registrado con exito </p>
      <p>En breve te enviaremos un correo con la confirmación de tu pedido</p>
      <p className='id'>ID Pedido : {ide} </p>
      </div>

      <Link className='secondary' to="/">Volver al inicio</Link>
      
    </div>
  )
}

export default OrderExit