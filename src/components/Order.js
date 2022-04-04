import { useContext } from "react"
import {contexto} from "../context/CartContext.js"
import {db} from "../firebase"
import {collection, serverTimestamp, addDoc} from "firebase/firestore"
import OrderExit from "./OrderExit.js"

const Order = () => {
    const {carrito, calcularTotal} = useContext(contexto)

    const clear = () => {
        window.location.pathname = "/OrderExit"
    }

    const submitOrder = (e) => {
        e.preventDefault()
        const order = {
            buyer :{
                name : document.getElementById("name").value,
                email : document.getElementById("email").value,
                phone : document.getElementById("phone").value,
                address : document.getElementById("address").value,
                city : document.getElementById("city").value,
                province: document.getElementById("province").value,
                cp: document.getElementById("cp").value
            },
            products : carrito,
            date: serverTimestamp(),
            total : calcularTotal()
        }
       

        const orderCollection = collection(db,"orders")
        addDoc(orderCollection,order)
        .then((r) => {
            const id = r.id
            alert(`Orden enviada con el id ${r.id}`)
            console.log(order)
            return id
        })
        .catch(() => alert("Error al enviar la orden"))
        .finally(() => clear())

    }




  return (
    <>
    <h2>Tu pedido</h2>
    {carrito.map(i =>
        <div key={i.id}>
         <p> {i.title} {i.cant} {i.cant === 1 ? "unidad" : "unidades"} x ${i.price} = ${(i.cant * i.price).toFixed(2)}</p>
        </div>)}
    <h4>Total: ${calcularTotal()}</h4>

    <form className="form_order">
    <h2>Facturacion y envio</h2>

    <label> Nombre y Apellido</label>
    <input type="text" name="nombre" id="name"  required/>
    

    <label> Email </label>
        <input type="email" name="email" id="email" required/>
    
    <label>Telefono/WhatsApp </label>
        <input type="tel" name="phone" id="phone" required/>
    
    <label>Region/Provincia - Arg</label>
        <select name="province" id="province" required>
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
        <input type="text" name="city" id="city" required/>
 

    <label>Calle y altura </label>
        <input type="text" name="address" id="address" required/>
    
    
    <label>Código Postal</label>
        <input type="text" name="cp" id="cp" required/>
   
    
    
        
   

    <button type="submit" onClick={submitOrder}>Realizar el pedido</button>
    
    </form>
    </>
  )
  
}

export default Order