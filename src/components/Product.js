import React from 'react';
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from "./Rating";


function Product({product}) {
    const center = {
        display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
    }

    return (
        <Container className="my-2 p-2">
            <Row>
                <Link to={`/book/${product._id}`}>
                    <div style={center}>
                        <Image className={'cardImage'}  src={product.image}/>
                    </div>

                </Link>

            </Row>


            <Row >
                <div style={center}>
                    <Rating value={product.rating} color={'#f8e825'} />
                </div>
            </Row>

            <Row>
                <Link to={`/book/${product._id}`}>
                    <div style={center}>
                        <strong>{product.title}</strong>
                    </div>
                </Link>
            </Row>

            <Row>
                <h4 style={center}>
                    ${product.price}
                </h4>
            </Row>

            <Row>
                <div style={center}>
                    <Button variant={'info'}>
                        Add to Cart
                    </Button>
                </div>
            </Row>

        </Container>
    );
}

export default Product;

// function Product({product}) {
//     return (
//         <Card className="my-3 p-3 rounded">
//             <Link to={`/product/${product._id}`}>
//                 <Card.Img variant="top" src={product.image}/>
//
//             </Link>
//
//             <Card.Body>
//                 <Link to={`/product/${product._id}`}>
//                     <Card.Title as="div">
//                         <strong>{product.name}</strong>
//                     </Card.Title>
//                 </Link>
//
//                 <Card.Text as="div">
//                     <div className="my-3">
//                         <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
//                     </div>
//                 </Card.Text>
//
//                 <Card.Text as="h3">
//                     ${product.price}
//                 </Card.Text>
//             </Card.Body>
//
//         </Card>
//     );
// }