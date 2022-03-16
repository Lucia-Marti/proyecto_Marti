import { useEffect, useState} from "react"
import products from "../database/products.js"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"

function getItem(){
    return new Promise((resolve) => {
      setTimeout(function() {
              resolve(products)
      },500)   
  })
}

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {productoId} = useParams() 

    useEffect(() => {     
      getItem()
      .then((response) =>{
        const encontrado = response.filter(a => a.id === productoId)
        return encontrado
      })
      .then((respuesta) => setItem(respuesta[0]))
      .catch(() => console.error("No se puede acceder al producto deseado"))
      .finally(()=> setLoading(false))
    }, [])

    if(loading){
      return (<h2> Cargando el producto seleccionado..</h2>)
    } else {
      return (<ItemDetail item={item} />)
    }
}

export default ItemDetailContainer