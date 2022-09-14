
import { Card } from "antd";
import React, { Component } from "react";
import Slider from "react-slick";
import './slider.scss'

const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
};

const CardT = ({ title, profit, current, total }) => {
    return <Card
        className="card-wrapper"
        hoverable
    >
        <h5>{title}</h5>
        <aside>{profit}</aside>
        <aside>{`${current}/${total}`}</aside>
    </Card>
}

export function SliderComponent({className}) {

    return (
        <section className={className}>
            <Slider {...settings}>
                {data.map(c => {
                    console.log(c)
                    return <CardT {...c} />
                })}
            </Slider>
        </section>
    );

}

const data = [{
    title: "Colorectal Surgery",
    profit: "-2.21%",
    current: 200,
    total: 500
}, {
    title: "Colorectal Surgery",
    profit: "-2.21%",
    current: 200,
    total: 500
}, {
    title: "Colorectal Surgery",
    profit: "-2.21%",
    current: 200,
    total: 500
}, {
    title: "Colorectal Surgery",
    profit: "-2.21%",
    current: 200,
    total: 500
}, {
    title: "Colorectal Surgery",
    profit: "-2.21%",
    current: 200,
    total: 500
}, {
    title: "Colorectal Surgery",
    profit: "-2.21%",
    current: 200,
    total: 500
}, {
    title: "Colorectal Surgery",
    profit: "-2.21%",
    current: 200,
    total: 500
}, {
    title: "Colorectal Surgery",
    profit: "-2.21%",
    current: 200,
    total: 500
}, {
    title: "Colorectal Surgery",
    profit: "-2.21%",
    current: 200,
    total: 500
}, {
    title: "Colorectal Surgery",
    profit: "-2.21%",
    current: 200,
    total: 500
}, {
    title: "Colorectal Surgery",
    profit: "-2.21%",
    current: 200,
    total: 500
}, {
    title: "Colorectal Surgery",
    profit: "-2.21%",
    current: 200,
    total: 500
}]