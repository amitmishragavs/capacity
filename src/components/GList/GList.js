import { Avatar, Divider, Input, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
const { Search } = Input;
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

export const GList = ({ list, onSelect }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(list);


    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body.results]);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    // useEffect(() => {
    //     loadMoreData();
    // }, []);


    return <section> <Search placeholder="Search" onSearch={() => { }} enterButton /><div
        id="scrollableDiv"
        style={{
            height: 400,
            minWidth: 400,
            overflow: 'auto',
            padding: '0 16px',
            border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
    >

        <InfiniteScroll
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length < 50}
            loader={
                <Skeleton
                    avatar
                    paragraph={{
                        rows: 1,
                    }}
                    active
                />
            }
            // endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
        >
            <List

                className='list'
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item onClick={() => onSelect(item, index)} key={item.email}>
                        <List.Item.Meta
                            // avatar={<Avatar src={item.picture.large} />}
                            title={item.name}
                            description="Duffield, Virginia(VA), 24244"
                        />
                        <div>{`${item.data.bed}/1200`}</div>
                    </List.Item>
                )}
            />
        </InfiniteScroll>
    </div></section>
};