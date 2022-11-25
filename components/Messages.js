import { Button, notification, Space } from 'antd';
import React from 'react';

export const NotifyMessage = ({ type, title, description }) => {
    notification[type]({
        message: title,
        description: typeof description === 'object' ?
            <>{
                description?.length > 0 && description.map(elem => <>
                    <span className='d-block'>{elem}</span>
                    <br />
                </>)
            }</>
            : description
    });
};
