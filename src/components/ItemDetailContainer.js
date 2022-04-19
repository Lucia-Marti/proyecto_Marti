import { useEffect, useState} from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import {db} from "../firebase"
import {collection, getDocs, query, where} from "firebase/firestore" 
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

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {productoId} = useParams() 
    

    useEffect(() => {  
      const productosCollection = collection(db, "productos")
      const consulta = !productoId ? getDocs(productosCollection) : getDocs(query(productosCollection,where("id","==",Number(productoId))))
      consulta
      .then(res => setItem(res.docs.map(doc => doc.data())[0]))
      .catch(() => swal("Error al cargar el producto seleccionado","", "error"))
      .finally(() => setLoading(false))
    }, [productoId])
    
    return ( loading ? <Lottie {...animation}  /> :  <ItemDetail item={item}/>)

}

export default ItemDetailContainer