import { useState, useEffect } from 'react';
import { ButtonGroup, Button} from 'react-bootstrap';

const ItemCount = ({initial,stock}) => {
  
    const [count, setCount] = useState(initial)
   
    const sumar = () => {
        if ( count < stock ) {
            setCount(count + 1)
        }else {
            alert("no hay mas stock");
        }
    }

    const restar = () => {
        if ((count <= stock) && ( count > 1) ) {
            setCount(count - 1)
        }else {
            alert("Debe seleccionar al menos una unidad");
        }
    }

    const onAdd = () =>{
        setCount(count)
        console.log( `El cliente pidio ${count} unidades`);
        alert(`Se agregaron ${count} unidades al carrito`);
  
    }     

    return (
        <div className='itemCount'>

            <ButtonGroup id='ButtonGroup' >
                <Button variant="secondary" onClick={restar} >-</Button>
                <p id='contador'> {count} </p>
                <Button variant="secondary" onClick={sumar}>+</Button>        
            </ButtonGroup>

            <Button id='agregar' variant="secondary" onClick={onAdd}>Agregar al carrito</Button>

        </div>
    )

}

export default ItemCount



