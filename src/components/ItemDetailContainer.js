import { useEffect, useState} from "react"
import products from "../database/products.js"
import ItemDetail from "./ItemDetail"



function getItem(){
    return new Promise((resolve) => {
        setTimeout(function() {
          
          resolve(products[0])
          
        },2000)
    })
}

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    useEffect(() => {
      getItem()
        .then((producto) => setItem(producto))
        .catch(() => console.error("No se puede acceder al producto deseado"))
      
    
    }, [])
    

    return (
      <>
      <ItemDetail item={item} /> 
      </>
       
    )

}

export default ItemDetailContainer