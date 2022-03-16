import Item from './Item'


const ItemList = ({items}) => {
  return (
    <section className="item_list"> 
        {items.map(i =>{ 
            return (
                <Item key={i.id} i={i} /> )
        } ) }
    </section>

  )
}

export default ItemList