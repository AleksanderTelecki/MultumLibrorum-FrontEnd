import React from 'react';
import {
    Avatar,
    Table,
    Group,
    Text,
    ActionIcon,
    Anchor,
    ScrollArea,
    useMantineTheme, Select, Container, Button, Card, Grid, Divider,
} from '@mantine/core';
import {Trash } from 'tabler-icons-react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../actions/cartActions";
import Message from "./Message";



export function CartTable({ data }) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    function removeFromCartHandler(id) {
        dispatch(removeFromCart(id))
    }

    function checkoutHandler() {
        navigate('/login?redirect=shipping')
    }


    const rows = data.map((item) => (
        <tr key={item.product}>
            <td>
                <Anchor component={Link} to={`/book/${item.product}`}>
                <Group spacing="sm">
                    <Avatar size={85} src={item.image} />
                    <Text lineClamp={1} size="sm" weight={500}>
                        {item.name}
                    </Text>
                </Group>
                </Anchor>
            </td>

            <td>
                <Text  color="gray">
                    ${item.price*item.qty}
                </Text>
        </td>
    <td>
        <Select
            sx={{ maxWidth: 70 }}
            variant="unstyled"
            defaultValue={`${item.qty}`}
            searchable
            nothingFound="No options"
            data={[...Array(item.availableQuantity).keys()].map((x=> `${x+1}`))}
            onChange={(e) => dispatch(addToCart(item.product,parseInt(e)))}
        />
    </td>
    <td>
        <Group spacing={0} position="right">
            <ActionIcon component={Button} onClick={()=>removeFromCartHandler(item.product)} color="red">
                <Trash size={32} />
            </ActionIcon>
        </Group>
    </td>
</tr>
));


    return (
            <Container>
                <h1>Shopping Cart</h1>
                {data.length === 0?(
                    <Message >
                        Your Cart is empty <Anchor component={Link} to="/"> Go Back </Anchor>
                    </Message>
                ):(
                    <Grid columns={12} >
                        <Grid.Col span={8}>
                            <Table fontSize="md" verticalSpacing="sm" highlightOnHover>
                                <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th />
                                </tr>
                                </thead>
                                <tbody>{rows}</tbody>
                            </Table>
                        </Grid.Col>

                        <Grid.Col span={4}>
                            <Card style={{ border:'1px solid gray'}} sx={{ minHeight: 120 }}>
                                <Card.Section mt={1} mx={5}>
                                    <Text size="xl"  align="center">SUBTOTAL ({data.map(x => x.qty).reduce((prev, next) => prev + next)}) ITEMS</Text>
                                </Card.Section>
                                <Divider my="sm" />
                                <Card.Section mx={5}>
                                    <Text color="dimmed">
                                        ${data.map(x => x.price*x.qty).reduce((prev, next) => prev + next)}
                                    </Text>
                                </Card.Section>
                                <Button onClick={()=>checkoutHandler()} variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                   PROCEED TO CHECKOUT
                                </Button>
                            </Card>
                        </Grid.Col>
                    </Grid>
                )}
            </Container>

    );
}