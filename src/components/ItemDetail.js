import ItemCount from "./ItemCount.js"

const ItemDetail = ({item}) => {

  console.log({item});
  const {id,title,descripcion,precio,categoria,img,stock} = item
  return (
    <section className="detail">

      <div className="item_detail">

        <div>
          <img className="img_detail--1" src= "https://http2.mlstatic.com/D_NQ_NP_785994-MLA46540771007_062021-O.webp" ></img>
          <div>
            <img className="img_detail" src="https://http2.mlstatic.com/D_NQ_NP_786330-MLA46540771009_062021-O.webp" ></img>
            <img className="img_detail" src="https://http2.mlstatic.com/D_NQ_NP_675584-MLA46540739191_062021-O.webp" ></img>
            <img className="img_detail" src="https://http2.mlstatic.com/D_NQ_NP_883879-MLA46540739190_062021-O.webp" ></img>
        </div>

        </div>

    
        <div className="detail_info" >
          <p> Categoria: {categoria} </p>
          <h4>{title} </h4>
          <p> ID : {id} </p>
          <p id="descripcion">{descripcion} </p>
          <h2> ${precio} </h2>

          <ItemCount stock={stock} initial={1}  />
         
        </div>

      </div>   
    </section>
  )
}

export default ItemDetail