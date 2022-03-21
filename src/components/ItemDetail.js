import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { useState } from 'react';
import ItemCount from "./ItemCount.js"
import {Link } from "react-router-dom"

const ItemDetail = ({item}) => {

  const [stock, setStock] = useState(item.stock)
  const [cant, setCant] = useState(0)
  

  const onAdd = (cantidad) => {

    if(cantidad > stock){
      alert("No hay disponible ese stock")
    }else {
      setCant(cant+cantidad)
      setStock(stock-cantidad)
    }
  }

  console.log("cantidad",cant );
  console.log("stock",stock );

  return (
    <section className="detail">
      <div className="item_detail">
        <img className="img_detail" src= {item.image} alt="imagen" ></img>
        <div className="detail_info" >
          <p> Categoria: {item.category} </p>
          <h4>{item.title} </h4>
          <p > ID : {item.id} </p>
          <p id='descripcion'>{item.description} </p>
          <Rate className='rate' allowHalf count={5} value={item.rating?.rate} />
          <p>Valoraciones: {item.rating?.count} </p>
          <h2> ${item.price} </h2>
          <p>Stock disponible: {stock} </p>
          
          <ItemCount onAdd={onAdd} stock={item.stock} initial={1}  />

          <Link className='detail_finalizar' to="/Cart">Finalizar compra</Link>
          
        </div>
      </div>   
    </section>
  )
}

export default ItemDetail