import { CardGroup, Card } from "react-bootstrap"
import ItemCount from "./ItemCount"

const IemListContainer = (props) => {
  return (
    <div>
        <h2> {props.greeting} {props.marca} </h2>
    
        <CardGroup>
            
            <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>Camperas</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>
            <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>Pantalones</Card.Title>
                <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>
            <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>Accesorios</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>
        </CardGroup>


        <ItemCount stock={10} initial={1} />
    </div>
    
  )
}

export default IemListContainer