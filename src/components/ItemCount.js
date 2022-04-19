import { useState } from 'react';
import swal from 'sweetalert'

const ItemCount = ({initial,stock, onAdd}) => {
  
    const [count, setCount] = useState(initial)
   
    const sumar = () => count < stock ? setCount(count + 1) : swal("No hay más stock","", "info")
    
    const restar = () => ((count <= stock) && ( count > 0)) ? setCount(count - 1) : swal("Debe seleccionar al menos una unidad","", "info")

    const agregar = () => {
        swal("Producto agregado correctamente","", "success")        
        onAdd(count) 
    }     

    return (
        <div className='itemCount'>
            <div id='buttonGroup' >
                <button className='secondary' onClick={restar} >-</button>
                <p id='contador'> {count} </p>
                <button className='secondary' onClick={sumar}>+</button>        
            </div>

            <button id='agregar' className='secondary' onClick={count > 0 ? agregar : agregar.disabled}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount



