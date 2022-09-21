import { Avatar, List } from 'antd';
import React from 'react';

const data = [
    {
        title: 'hospital 1',
    },
    {
        title: 'hospital 2',
    },
    {
        title: 'hospital 3',
    },
    {
        title: 'hospital 4',
    },
];

export const GList = () => (
    <List
        className='list'
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={item.title}
                    description="Details"
                />
            </List.Item>
        )}
    />
);