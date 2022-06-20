import React, {useState,useEffect} from 'react';
import Product from "../components/Product";
import {Row,Col,Navbar,Nav,Container,NavDropdown,Button,Form,FormControl,Offcanvas,ListGroup,Collapse,ButtonGroup,InputGroup} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {listGenres, listProducts} from '../actions/productActions'
import Spinner from "../components/Spinner";
import Message from "../components/Message";
import {Drawer, MultiSelect, Paper, SimpleGrid} from "@mantine/core";
import axios from "axios";

function HomeScreen(props) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const genresList = useSelector(state=>state.genresList)
    const {genres} = genresList
    const {error,loading,products} = productList


    useEffect(() => {
        dispatch((listProducts()))
        dispatch(listGenres())

    }, [dispatch]);

    const [opened, setOpened] = useState(false);
    const [value, setValue] = useState([]);
    const [search,setSearch] = useState()

     async function handleFilter(e) {
         e.preventDefault()
         const genres = value
         dispatch((listProducts({genres:genres})))
         setOpened(false)
     }

    function clearFilter() {
        setValue([])
        dispatch((listProducts()))
        setOpened(false)
    }

    function handleSearch() {
        setSearch('')
        dispatch((listProducts({search:search})))
    }

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
                            <Nav.Link onClick={() => setOpened(true)} href="#action1">Filter</Nav.Link>
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
                                <FormControl value={search} onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search"
                                />
                                <Button onClick={handleSearch} variant="secondary" id="search">
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
                {loading ? <Spinner/>
                    : error ? <Message color='red' title='Error!'>{error}</Message>
                        :<Row xs={1} sm={2} md={3} lg={4} xl={5}>
                            {products.map(book => (
                                <Col key={book._id} >
                                    <Product product={book}/>
                                </Col>
                            ))}
                        </Row>}
                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Filter Menu"
                    padding="md"
                    size="md"
                    position="right"
                >
                    <Paper>
                    <MultiSelect
                        data={genres}
                        value={value}
                        onChange={setValue}
                        label="Choose genres"
                        placeholder="Pick all that you like"
                        searchable
                        nothingFound="Nothing found"
                    />
                        <SimpleGrid cols={2}>
                            <Button className="mt-2" onClick={handleFilter} variant="secondary">Use filter</Button>
                            <Button className="mt-2" onClick={clearFilter} variant="danger">Clear Filter</Button>
                        </SimpleGrid>

                    </Paper>
                </Drawer>
            </Container>
        </div>
    );
}

export default HomeScreen;