import { Link } from "react-router-dom"

const Item = ({i}) => {
    return (
            <div className="item">
                <img className="image" src={i.image}></img>
                <div className="item_body">
                    <h4 className="item_body-h4">{i.title} </h4>
                    <p className="item_body-id"> ID : {i.id} </p>
                    <p className="item_body-precio"> ${i.price} </p>
                </div>
                <Link className="verDetalle" to={`/producto/${i.id}`} > Ver detalle </Link>
            </div>
    )
}

export default Item