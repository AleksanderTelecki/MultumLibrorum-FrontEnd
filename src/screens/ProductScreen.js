import React, {useEffect, useState} from 'react';
import {Link,useParams } from 'react-router-dom'
import {
    Row,
    Col,
    Form,
    Breadcrumb,
    Image,
    ListGroup,
    Button,
    Card,
    Container,
    Tab,
    Tabs,
    ListGroupItem
} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Rating from "../components/Rating";
import {listProductDetails} from "../actions/productActions";
import {useDispatch,useSelector} from "react-redux";
import Spinner from "../components/Spinner";
import Message from "../components/Message";
import Product from "../components/Product";

function ProductScreen(props) {
    let { id } = useParams();
    const dispatch = useDispatch()
    const productDetails = useSelector(state=>state.productDetails)
    const {loading,product,error} = productDetails

    useEffect(()=>{
        dispatch(listProductDetails(id))
    },[dispatch,id])




    const [key, setKey] = useState('description');

    return (
        <div className="componentWraper">
            <div className={'py-2'}></div>
            {loading ? <Spinner/>
                : error ? <Message color='red' title='Error!'>{error}</Message>
                    : <Container >
                        <Breadcrumb >
                            <LinkContainer to='/'>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                            </LinkContainer>
                            <Breadcrumb.Item active>
                                {product.title}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Row>

                            <Col md="auto" >
                                <Image className="productImage" src={product.image} alt={product.title} fluid  />
                            </Col>

                            <Col md={3}>
                                <ListGroup >
                                    <ListGroup.Item>
                                        <h3>{product.title}</h3>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        Price: ${product.price}
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        Status: {product.availableQuantity > 0 ? 'In Stock': 'Out of Stock' }
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button className="w-100 h-100" disabled={product.availableQuantity === 0} type='button'>Add to Cart</Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>


                        </Row>
                        <Row className="my-2 mx-1">
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab eventKey="description" title="Description &amp; Details">

                                    <Container className={'mb-3'}>
                                        <Row >
                                            <Col md={9}>
                                                <h3>Product Description</h3>
                                                <strong>
                                                    {product.description}
                                                </strong>
                                            </Col>
                                            <Col md={'auto'}  >
                                                <h3>Details </h3>
                                                <ListGroup variant="flush" >
                                                    <ListGroup.Item variant="info">
                                                        <h6 >Author:  {product.author}</h6>
                                                        <h6 >Publisher:  {product.publisher}</h6>
                                                        <h6 >ISBN:  {product.isbn13}</h6>
                                                    </ListGroup.Item>
                                                </ListGroup>

                                            </Col>

                                        </Row>
                                    </Container>

                                </Tab>
                                <Tab eventKey="reviews" title="Review this book">
                                    <h3>Write a Review</h3>
                                    <div className={'my-2'}>
                                        <h6>Review Rating</h6>
                                        <span><i className={'fa-regular fa-star'}></i></span>
                                        <span><i className={'fa-regular fa-star'}></i></span>
                                        <span><i className={'fa-regular fa-star'}></i></span>
                                        <span><i className={'fa-regular fa-star'}></i></span>
                                        <span><i className={'fa-regular fa-star'}></i></span>
                                    </div>
                                    <Form className={'my-2'}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Review Text</Form.Label>
                                            <Form.Control as="textarea" rows={5} />
                                        </Form.Group>

                                        <Button className={'me-2'} variant={'primary'}>Submit</Button>
                                        <Button variant={'primary'}>Submit as Guest</Button>
                                    </Form>
                                </Tab>

                            </Tabs>
                        </Row>
                    </Container>}



        </div>
    );
}

export default ProductScreen;