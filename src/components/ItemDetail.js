import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

import ItemCount from "./ItemCount.js"

const ItemDetail = ({item}) => {

  return (
    <section className="detail">
      <div className="item_detail">
        <img className="img_detail" src= {item.image} ></img>
        <div className="detail_info" >
          <p> Categoria: {item.category} </p>
          <h4>{item.title} </h4>
          <p > ID : {item.id} </p>
          <p id='descripcion'>{item.description} </p>
          <Rate className='rate' allowHalf count={5} value={item.rating?.rate} />
          <p>Valoraciones: {item.rating?.count} </p>
          <h2> ${item.price} </h2>
          <p>Stock disponible: {item.stock} </p>
          
          <ItemCount stock={item.stock} initial={1}  />
        </div>
      </div>   
    </section>
  )
}

export default ItemDetail