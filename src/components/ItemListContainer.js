import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import products from "../database/products.js"
import ItemList from "./ItemList"

function getDatos(){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const logica = Math.floor(Math.random()*100)
            const error = logica < 2 ? true : false;

            if (error === false) {
                resolve(products)
            } else {
                reject("Hubo un error obteniendo los datos")
            }
        },1000)   
    })
}

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaNombre} = useParams()

    useEffect(() => {
        getDatos()
        .then((respuesta) => setItems(respuesta))
        .catch((error) => console.error(error))
        .finally(()=> setLoading(false))
    },[])
    
    if (categoriaNombre === "aros") {
        const aros = items.filter(a => a.category === "Aros")
        return ( <ItemList items={aros} /> )
    }
    if (categoriaNombre === "pulsera") {
        const pulseras = items.filter(a => a.category === "Pulsera")
        return ( <ItemList items={pulseras} /> )
    }
    if (categoriaNombre === "collar") {
        const collares = items.filter(a => a.category === "Collar")
        return ( <ItemList items={collares} /> )
    }
    if (categoriaNombre === "anillo") {
        const anillos = items.filter(a => a.category === "Anillo")
        return ( <ItemList items={anillos} /> )
    }
        
    if(loading){
        return (<h2> Cargando... </h2> )
    } else {
        return ( <ItemList items={items} /> )
    }

}

export default ItemListContainer

