import {Center, Loader} from "@mantine/core";
import React from "react";


function Spinner(props) {
    return (
        <Center >
            <Loader size='xl'/>
            <span>Loading...</span>
        </Center>
    );
}

export default Spinner;

