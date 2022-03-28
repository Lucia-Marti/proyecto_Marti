import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import {useState, useContext } from 'react';
import ItemCount from "./ItemCount.js"
import {Link } from "react-router-dom"

import { contexto } from '../context/CartContext.js';

const ItemDetail = ({item}) => {

  const [cantidad, setCantidad] = useState(0);

  const {addItem} = useContext(contexto)

  const onAdd = (cant) => {
    addItem(item,cant)
    setCantidad(cant)
  }

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
          <p>Stock disponible: {item.stock} </p>
          
          <ItemCount onAdd={onAdd} stock={item.stock} initial={0}  />          

          {cantidad > 0 ? <Link className='detail_finalizar' variant="secondary" to='/cart'>Ver carrito</Link> : null}
          
        </div>
      </div>   
    </section>
  )
}

export default ItemDetail