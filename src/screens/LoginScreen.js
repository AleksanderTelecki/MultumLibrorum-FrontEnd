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
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {load_user, login} from "../actions/userActions";
import Message from "../components/Message";


function LoginScreen() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
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
        await dispatch(login(email, password))
        dispatch(load_user());
    }

    return (
        <Container size={420} my={40}>
            {error && <Message color='red'>{error}</Message>}
            {loading && <Loader />}
            <Title align="center"
                   sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
                Welcome back!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do not have an account yet?{' '}

                <Anchor component={Link} to='/registration'>
                Create account
                </Anchor>

            </Text>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput value={email} onChange={(e)=>setEmail(e.target.value)} name="email" label="Email" placeholder="you@multum.lib" required />
                <PasswordInput value={password} onChange={(e)=>setPassword(e.target.value)}  name="password"  label="Password" placeholder="Your password" required mt="md" />
                {/*TODO: Forgot Password*/}

                {/*    <Group position="apart" mt="md">*/}
            {/*        <Checkbox label="Remember me" />*/}
            {/*        <Anchor component={Link} to='/forgot-password' size="sm">*/}
            {/*        Forgot password?*/}
            {/*    </Anchor>*/}
            {/*</Group>*/}

            <Button onClick={submitHandler} fullWidth mt="xl">
                Sign in
            </Button>

            </Paper>
        </Container>
);
}

export default LoginScreen;