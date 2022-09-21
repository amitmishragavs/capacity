
import { Card } from "antd";
import React, { Component } from "react";
import Slider from "react-slick";

const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
};

const CardT = ({ title, profit, current, total }) => {

    return <Card
        className="card-wrapper"
        hoverable
    >
        <h5>{title}</h5>
        <aside className={profit.includes("-")?"loss":"profit"}>{profit}</aside>
        <aside>{`${current}/${total}`}</aside>
    </Card>
}

export function SliderComponent({className}) {

    return (
        <section className={className}>
            <Slider {...settings}>
                {data.map((c,i )=> {
                    // console.log(c)
                    return <CardT {...c} index={i} />
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
    profit: "+2.21%",
    current: 200,
    total: 500
}, {
    title: "Colorectal Surgery",
    profit: "-2.21%",
    current: 200,
    total: 500
}, {
    title: "Colorectal Surgery",
    profit: "+2.21%",
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
    profit: "+2.21%",
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