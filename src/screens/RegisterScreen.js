import React from 'react';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';


import { DatePicker } from '@mantine/dates';
import { Link } from 'react-router-dom';

export function RegisterScreen() {
    return (
        <Container size={420} my={40}>
            <Title align="center"
                   sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
                Registration
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do you have an account?{' '}
                <Anchor component={Link} to='/login'>
                    Login
                </Anchor>
            </Text>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Full Name" placeholder="Jan Kowalski" required />
                <DatePicker placeholder="Date" label="Birth Date" />
                <TextInput label="Email" placeholder="you@multum.lib" required />
                <PasswordInput label="Chosen Password" placeholder="password" required mt="md" />
                <PasswordInput label="Confirm Password" placeholder="password" required mt="md" />
                <Group position="apart" mt="md">
                    <Checkbox label="I accept the term of use" />
                </Group>
                <Button fullWidth mt="xl">
                    Sign up
                </Button>

            </Paper>
        </Container>
    );
}