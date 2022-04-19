import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import {db} from "../firebase"
import {collection, getDocs, query , where} from "firebase/firestore" 
import swal from 'sweetalert'
import Lottie from "lottie-react";
import loading from "../assets/loading.json"

const animation = {
  animationData: loading,
  autoplay: true,
  loop: true,
  style: {
    width: "50%",
    marginTop: "50px",
    display: "inline-block",
    textAlign: "center",
  }
}

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaNombre} = useParams()

    
    
    useEffect(() => {  
      const productosCollection = collection(db, "productos")
      const consulta = !categoriaNombre ? getDocs(productosCollection) : getDocs(query(productosCollection,where("category","==",categoriaNombre)))
            consulta
                .then(res => setItems(res.docs.map(doc => doc.data())))
                .catch(() => swal("Error al cargar los productos","", "error"))
                .finally(() => setLoading(false))

    }, [categoriaNombre])

    return ( loading ? <Lottie {...animation} />:  <ItemList items={items} />)

}

export default ItemListContainer

