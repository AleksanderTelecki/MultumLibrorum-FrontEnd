import React from 'react';
import { Alert } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';

function Message({color,title,children}) {
    return (
        <Alert icon={<AlertCircle size={16} />} title={title} color={color}>
            {children}
        </Alert>
    );
}

export default Message;