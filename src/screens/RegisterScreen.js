import React, {useEffect, useState} from 'react';
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
    Button, Loader,
} from '@mantine/core';


import { DatePicker } from '@mantine/dates';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {load_user, login, register} from "../actions/userActions";
import Message from "../components/Message";

export function RegisterScreen() {

    const [email,setEmail] = useState('')
    const [first_name,setFirstName] = useState('')
    const [last_name,setLastName] = useState('')
    const [password,setPassword] = useState('')
    const [re_password,setRe_password] = useState('')

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const user = useSelector(state => state.user)
    const {error,loading,userAuth} = user
    useEffect(()=>{
        if (userAuth){
            dispatch(load_user())
            navigate(`/`)
        }
    })

    const submitHandler = async (e) => {
        e.preventDefault()
        await dispatch(register(email,password,re_password,first_name,last_name))
    }

    return (
        <Container size={420} my={40}>
            {error && <Message color='red'>{error}</Message>}
            {loading && <Loader />}
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
                <TextInput value={first_name} onChange={(e)=>setFirstName(e.target.value)} label="First Name" placeholder="Jan" required />
                <TextInput value={last_name} onChange={(e)=>setLastName(e.target.value)} label="Last Name" placeholder="Kowalski" required />
                <TextInput value={email} onChange={(e)=>setEmail(e.target.value)} label="Email" placeholder="you@multum.lib" required />
                <PasswordInput value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" placeholder="password" required mt="md" />
                <PasswordInput value={re_password} onChange={(e)=>setRe_password(e.target.value)} label="Confirm Password" placeholder="password" required mt="md" />
                <Button onClick={submitHandler} fullWidth mt="xl">
                    Sign up
                </Button>

            </Paper>
        </Container>
    );
}