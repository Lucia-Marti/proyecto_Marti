import {Alert} from "react-bootstrap"

const Main = (props) => {

    let frase;

    if (props.edad >= 18) {
        frase = "Puedes acceder, eres mayor de edad"
    } else {
        frase = "No puedes acceder, debes ser mayor de edad"
    }

  return (
        <main>
            
            <p className='alert'>Bienvenido {props.nombre}</p>
            <Alert variant="success"> {frase} </Alert>   
        </main>
  )
}

export default Main