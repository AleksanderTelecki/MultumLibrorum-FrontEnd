import React, {useState} from 'react';
import products from "../products";
import Product from "../components/Product";
import {Row,Col,Navbar,Nav,Container,NavDropdown,Button,Form,FormControl,Offcanvas,ListGroup,Collapse,ButtonGroup,InputGroup} from 'react-bootstrap'

function HomeScreen(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [openCategory, setOpenCategory] = useState(false);
    const [openPrice, setOpenPrice] = useState(false);
    const [openPublisher, setOpenPublisher] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);

    return (
        <div className="componentWraper" >
            <div className={'pt-2'}></div>
            <Container >
            <Navbar  bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" onClick={handleShow}>Filter</Nav.Link>
                            <NavDropdown title="Browse Store" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <InputGroup className="me-2">
                                <FormControl
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search"
                                />
                                <Button variant="secondary" id="search">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </Button>
                            </InputGroup>
                            <ButtonGroup >
                                <Button variant="secondary"><i className="fa-solid fa-grip-vertical"></i></Button>
                                <Button variant="secondary"><i className="fa-solid fa-list"></i></Button>
                            </ButtonGroup>

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                    {products.map(product => (
                        <Col key={product._id} >
                            <Product product={product}/>
                        </Col>
                    ))}
                </Row>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Body>
                        <h1>Filters</h1>
                        <Form>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <ListGroup className="my-2" variant="flush">
                                <ListGroup.Item>
                                    <Button
                                    onClick={() => setOpenCategory(!openCategory)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={openCategory}
                                    variant="link">
                                    Category
                                    </Button>
                                    <Collapse in={openCategory}>
                                        <div id="example-collapse-text">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </Collapse>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button
                                        onClick={() => setOpenPrice(!openPrice)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={openPrice}
                                        variant="link">
                                        Price
                                    </Button>
                                    <Collapse in={openPrice}>
                                        <div id="example-collapse-text">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </Collapse>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button
                                        onClick={() => setOpenPublisher(!openPublisher)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={openPublisher}
                                        variant="link">
                                        Publisher
                                    </Button>
                                    <Collapse in={openPublisher}>
                                        <div id="example-collapse-text">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </Collapse>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button
                                        onClick={() => setOpenLanguage(!openLanguage)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={openLanguage}
                                        variant="link">
                                        Language
                                    </Button>
                                    <Collapse in={openLanguage}>
                                        <div id="example-collapse-text">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </Collapse>
                                </ListGroup.Item>
                            </ListGroup>
                            <Container>
                                <Button className="mx-2" variant="primary">Set Filters</Button>
                                <Button variant="warning">Clear Filters</Button>
                            </Container>

                        </Form>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </div>
    );
}

export default HomeScreen;