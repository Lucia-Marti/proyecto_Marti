

const Item = ({i}) => {
    return (
            <div className="item">
                <img src={i.img}></img>
                <div className="item_body">
                    <h4 className="item_body-h4">{i.title} </h4>
                    <p className="item_body-id"> ID : {i.id} </p>
                    <p className="item_body-precio"> ${i.precio} </p>
                </div>
            </div>    
   
    )
}

export default Item