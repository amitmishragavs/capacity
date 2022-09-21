import React from 'react'
import { GChart } from '../../components/GChart/GChart'
import { SliderComponent } from '../../components/Slider/Slider'

function Details() {
    return (
        <section>
            <SliderComponent className="app-wrapper" />
            <section className="g-chart">
                <GChart />
            </section>
        </section>
    )
}

export default Details