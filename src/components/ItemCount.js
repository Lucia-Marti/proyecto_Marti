import { useState } from 'react';
import { ButtonGroup, Button} from 'react-bootstrap';

const ItemCount = (props) => {
  
    const [estado, setEstado] = useState(props.initial)

    const sumar = () => {
        if ( estado < props.stock ) {
            setEstado(estado + 1)
        }else {
            alert("no hay mas stock");
        }
    }

    const restar = () => {
        if ((estado <= props.stock) && ( estado > 1) ) {
            setEstado(estado - 1)
        }else {
            alert("Debe seleccionar al menos una unidad");
        }
    }

    const onAdd = () =>{
        setEstado(estado)
        console.log( `El cliente pidio ${estado} unidades`);
        alert(`Se agregaron ${estado} unidades al carrito`);
  
    } 
    

    return (
        <div className='itemCount'>

            <p >Contador - Desafio 4</p>

            <ButtonGroup id='ButtonGroup' >
                <Button variant="secondary" onClick={restar} >-</Button>
                <p id='contador'> {estado} </p>
                <Button variant="secondary" onClick={sumar}>+</Button>        
            </ButtonGroup>

            <Button id='agregar' variant="secondary" onClick={onAdd}>Agregar al carrito</Button>

        </div>
    )

}

export default ItemCount



