import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import {db} from "../firebase"
import {collection, getDocs, query , where} from "firebase/firestore" 

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaNombre} = useParams()

    const productosCollection = collection(db, "productos")
    
    useEffect(() => {  

        const consulta = !categoriaNombre ? getDocs(productosCollection) : getDocs(query(productosCollection,where("category","==",categoriaNombre)))
            consulta
                .then(res => setItems(res.docs.map(doc => doc.data())))
                .catch(() => console.error("Error al cargar los productos"))
                .finally(() => setLoading(false))

    }, [categoriaNombre])


    if(loading){ 
        return (<h2> Cargando... </h2> )
    } else {
        return ( <ItemList items={items} /> )
    }   

}

export default ItemListContainer

