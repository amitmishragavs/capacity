import { faker } from '@faker-js/faker'
import React, { useState } from 'react'
import { GList } from '../../components/GList/GList'
import { Map } from '../../components/Map/Map'
import { Button } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { GLineChart } from '../../components/GLineChart/GLineChart';
function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}
const dataGenerate = (name = "Hospital") => {
    return {
        name: `${name} ${faker.datatype.number({ min: 1, max: 1000 })}`,
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        Address: faker.address.city(),
        phone: faker.phone.phoneNumber(),
        local: faker.random.locale(),
        pin: faker.datatype.number({ min: 6, max: 6 }),
        data: {
            bed: Math.floor(100 + Math.random() * 900)
        },
        location: {
            lat: getRandomInRange(40.067439, 73.237617, 3),
            long: getRandomInRange(40.067439, 73.237617, 3)
        }
    };
}

const generate = (l) => {
    const data = [];
    for (let i = 0; i < l; i++) {
        data.push(dataGenerate())
    }
    return data;
}

export const data = generate(100);


function List() {
    const [selectedList, setSelectedList] = useState({})
    const [selectedIndex, setSelectedIndex] = useState()


    return (
        <>

            <section className='hospital-module-wrapper'>

                <GList list={data} onSelect={(field, index) => {
                    setSelectedList(field)
                    setSelectedIndex(index)
                }} />
                <section className="google-map">
                    <Map current={selectedList.location} list={data} />
                </section>
            </section>
            {Object.keys(selectedList).length ? <section className='line-chart'>
                <Link style={{ display: "inline", borderRadius: "3px", background: "skyblue", padding: "5px", color: "#fff" }} to={`/hospital/${selectedIndex}`}>Details</Link>
                <GLineChart />
            </section> : null}
        </>
    )
}

export default List