import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserDetails} from "../actions/userActions";
import {Anchor, Button, Container, Grid, Loader, Paper, PasswordInput, Text, TextInput, Title} from "@mantine/core";
import Message from "../components/Message";

export function ProfileScreen() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails


    useEffect(()=>{
        if (!localStorage.getItem('userAuth')){
            navigate(`/login`)
        }else if(!user || Object.keys(user).length === 0){
            dispatch(getUserDetails())
        }
    })

    console.log(user)

    return (
        <Container>
            {error && <Message color='red'>{error}</Message>}
            {loading && <Loader />}
            <Title align="left"
                   sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
                Profile Information
            </Title>
            <Grid>
                <Grid.Col span={4}>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <Text>Email:{user.email}</Text>
                        <Text>First Name:{user.first_name}</Text>
                        <Text>Last Name:{user.last_name}</Text>
                        <Text>Is Staff:{user.is_staff?"True":"False"}</Text>

                    </Paper>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Paper  mt={30} withBorder shadow="md" radius="md">
                        <Title align="center" order={3}> Ordered Items </Title>
                    </Paper>

                </Grid.Col>
            </Grid>

        </Container>
    );
}