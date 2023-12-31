import { Card, Button } from 'react-bootstrap';
import './ItemDetailContainer.css';
import { Link } from 'react-router-dom';


const ItemDetailContainer = ({product, children}) => {

    const {id, image, title, price, stock} = product
   

    return( 
       
        <Card className="d-flex" key={id} >
<Card.Img className="card-img " variant="top" src={image} />
<div className="h-100">
<Card.Body className="d-flex flex-column">
<Card.Title>{title}</Card.Title>
<Card.Text className="flex-grow-1">
 ${price}
</Card.Text>
<div className="mt-auto">
<Button as={Link} to={`/item/${product.id}`} className="cardButton" variant="primary">Ver detalle</Button>

</div>
</Card.Body>
</div>
</Card>

        
    );
}

export default ItemDetailContainer;