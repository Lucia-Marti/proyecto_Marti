import { useEffect, useState} from "react"
import products from "../database/products.js"
import ItemList from "./ItemList"

function getDatos(){
    return new Promise((resolve, reject) => {
        setTimeout(

            function() {

            const logica = Math.floor(Math.random()*100)
            const error = logica < 5 ? true : false;

            if (error === false) {
                resolve(products)
            } else {
                reject("Hubo un error obteniendo los datos")   
            }
            
        },2000)
    })
}

const ItemListContainer = (props) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getDatos()
        .then((respuestaPromesa) => setItems(respuestaPromesa))
        .catch((error) => console.error(error))
      
    
    }, [])
    

    return (
      
        <>
            <h2> {props.marca} </h2>
            <ItemList items={items} /> 
        </>
    )

}

export default ItemListContainer