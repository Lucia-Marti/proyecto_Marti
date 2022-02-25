import {Alert, Button} from "react-bootstrap"

const Main = (props) => {

    let frase;

    if (props.edad >= 18) {
        frase = "Puedes acceder, eres mayor de edad"
    } else {
        frase = "No puedes acceder, debes ser mayor de edad"
    }

  return (
        <main>
            <Alert variant="danger">Entrega 3  </Alert>
            <p className='alert'>Bienvenido {props.nombre}</p>
        
            <Alert variant="info"> {frase} </Alert>   
        </main>
  )
}

export default Main