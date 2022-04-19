import { useContext, useRef, useState} from "react"
import {contexto} from "../context/CartContext.js"
import {db} from "../firebase"
import {collection, serverTimestamp, addDoc,doc, updateDoc,getDocs, query, where} from "firebase/firestore"
import OrderExit from "./OrderExit.js"
import swal from 'sweetalert'

const Order = () => {
    const {carrito,clear, calcularTotal} = useContext(contexto)
    const refName= useRef("")
    const refEmail = useRef("")
    const refPhone = useRef("")
    const refAddress = useRef("")
    const refCity = useRef("")
    const refProvince = useRef("")
    const refCP = useRef("")
     
    const [ide, setIde] = useState("")
    const [loading, setLoading] = useState(true)

    const submitOrder = (e) => {
        e.preventDefault()
        if(carrito.length===0) {
            swal("No hay productos en el carrito","", "info")
        } else if (refName.current.value === "" || refEmail.current.value === "" || refPhone.current.value === "" || refAddress.current.value === "" || refCity.current.value === "" || refProvince.current.value === "" || refCP.current.value === "") {
            swal("Por favor, complete los campos requeridos","", "warning")
        }else {
            const order = {
                buyer :{
                    name : refName.current.value,
                    email :refEmail.current.value,
                    phone : refPhone.current.value,
                    address :refAddress.current.value,
                    city : refCity.current.value,
                    province: refProvince.current.value,
                    cp: refCP.current.value,
                },
                products : carrito,
                date: serverTimestamp(),
                total : calcularTotal()
            }

            const orderCollection = collection(db,"orders")
            addDoc(orderCollection,order)
            .then(r =>{
                setIde(r.id)
                swal("Tu pedido ha sido enviado con éxito","", "success")
            } )
            .catch(() => swal("Hubo un error al enviar la orden","", "error"))
            .finally(()=>{
                setLoading(false)
                clear()
                updateStock()
            })
        }
    }

    const updateStock = () => {
        let idFirebase
        carrito.forEach(item => {
            let id = item.id
            const newStock =(item.stock-item.cant)
            
            const productsCollection = collection(db,"productos")
            getDocs(query(productsCollection,where("id","==",Number(id))))
            .then(res =>{
                res.docs.map(doc => idFirebase = doc.id )
                updateDoc(doc(productsCollection,idFirebase),{stock:newStock})
            })  
        })
    }

        return ( loading ? <>
            <h2>Tu pedido</h2>
            {carrito.map(i =>
                <div key={i.id}>
                <p> {i.title} {i.cant} {i.cant === 1 ? "unidad" : "unidades"} x ${i.price} = ${(i.cant * i.price).toFixed(2)}</p>
                </div>)}
            <h4>Total: ${calcularTotal()}</h4>

            <form className="form_order">

            <h2>Facturación y envío</h2>

            <label> Nombre y Apellido</label>
            <input ref={refName} type="text" placeholder="Nombre y Apellido" name="nombre" id="name" required/>
            
            <label> Email </label>
                <input ref={refEmail} type="email" name="email" id="email" placeholder="E-mail" required/>
            
            <label>Telefono/WhatsApp </label>
                <input type="number" ref={refPhone} name="phone" id="phone" maxLength={11} placeholder="Telefono" required/>
            
            <label >Region/Provincia - Arg</label>
                <select ref={refProvince} name="province" id="province" >
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Catamarca">Catamarca</option>
                    <option value="Chaco">Chaco</option>
                    <option value="Chubut">Chubut</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Corrientes">Corrientes</option>
                    <option value="Entre Ríos">Entre Ríos</option>
                    <option value="Formosa">Formosa</option>
                    <option value="Jujuy">Jujuy</option>
                    <option value="La Pampa">La Pampa</option>
                    <option value="La Rioja">La Rioja</option>
                    <option value="Mendoza">Mendoza</option>
                    <option value="Misiones">Misiones</option>
                    <option value="Neuquén">Neuquén</option>
                    <option value="Río Negro">Rio Negro</option>
                    <option value="Salta">Salta</option>
                    <option value="San Juan">San Juan</option>
                    <option value="San Luis">San Luis</option>
                    <option value="Santa Cruz">Santa Cruz</option>
                    <option value="Santa Fe">Santa Fe</option>
                    <option value="Santiago del Estero">Santiago del Estero</option>
                    <option value="Tierra del Fuego">Tierra del Fuego</option>
                    <option value="Tucuman">Tucuman</option>
                </select>

            <label>Localidad </label>
                <input  ref={refCity} type="text" name="city" id="city" placeholder="Localidad/Ciudad" required/>
        
            <label>Dirección </label>
                <input ref={refAddress} type="text" name="address" id="address" placeholder="Calle y altura" required/>
            
            <label>Código Postal</label>
                <input  ref={refCP} type="number" name="cp" id="cp" maxLength={5} placeholder="Código Postal" required/>
                
            <button type="submit" onClick={submitOrder}>Realizar el pedido</button>
            
            </form>
  
            </> : <OrderExit ide={ide}/>
        )  
}

export default Order
