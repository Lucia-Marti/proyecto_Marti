import { useEffect, useState} from "react"
import products from "../database/products.js"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"

import {db} from "../firebase"
import {collection, getDocs, query, where} from "firebase/firestore" 

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {productoId} = useParams() 
    const productosCollection = collection(db, "productos")

    useEffect(() => {  

      const consulta = !productoId ? getDocs(productosCollection) : getDocs(query(productosCollection,where("id","==",Number(productoId))))
          consulta
              .then(res => setItem(res.docs.map(doc => doc.data())[0]))
              .catch(() => console.error("No se puede acceder al producto deseado"))
              .finally(() => setLoading(false))
  }, [productoId])


    if(loading){
      return (<h2> Cargando el producto seleccionado..</h2>)
    } else {
      return (<ItemDetail item={item} />)
    }
}

export default ItemDetailContainer