import React from 'react'
import { GList } from '../../components/GList/GList'
import { Map } from '../../components/Map/Map'

function List() {
    return (
        <section className='hospital-module-wrapper'>
            <GList />

            <section className="google-map">
                <Map />
            </section>
        </section>
    )
}

export default List