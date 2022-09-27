import React from 'react'
import { GChart } from '../../components/GChart/GChart'
import { SliderComponent } from '../../components/Slider/Slider'
import { data } from './List'


function Details() {
    let params = window.location.pathname.split('/')
    let id = params[params.length-1]
    return (
        <section>
            <SliderComponent className="app-wrapper" sdata={data[id]} />
            <section className="g-chart">
                <GChart />
            </section>
        </section>
    )
}

export default Details