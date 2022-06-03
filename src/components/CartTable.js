import React from 'react';
import {
    Avatar,
    Badge,
    Table,
    Group,
    Text,
    ActionIcon,
    Anchor,
    ScrollArea,
    useMantineTheme, Select,
} from '@mantine/core';
import {Trash } from 'tabler-icons-react';
import {Link} from "react-router-dom";



export function CartTable({ data }) {
    const theme = useMantineTheme();

    const tableFooter = (
        <tr>
            <td>
                Total Price: {data.map(x => x.price*x.qty).reduce((prev, next) => prev + next)}$
            </td>
        </tr>
    );

    const rows = data.map((item) => (
        <tr key={item.product}>
            <td>
                <Anchor component={Link} to={`/book/${item.product}`}>
                <Group spacing="sm">
                    <Avatar size={85} src={item.image} />
                    <Text size="sm" weight={500}>
                        {item.name}
                    </Text>
                </Group>
                </Anchor>
            </td>

            <td>
                <Text  color="gray">
                    {item.price*item.qty}
                </Text>
        </td>
            <td>
                <Text  color="gray">
                    {item.availableQuantity}
                </Text>
            </td>
    <td>
        <Text color="gray">
            {item.qty}
        </Text>
    </td>
    <td>
        <Group spacing={0} position="right">
            <ActionIcon color="red">
                <Trash size={32} />
            </ActionIcon>
        </Group>
    </td>
</tr>
));

    return (
        <ScrollArea>
            <Table fontSize="md" sx={{ minWidth: 800 }} verticalSpacing="sm" highlightOnHover>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Available Quantity</th>
                    <th>Quantity</th>
                    <th />
                </tr>
                </thead>
                <tbody>{rows}</tbody>
                <tfoot>{tableFooter}</tfoot>
            </Table>
        </ScrollArea>
    );
}