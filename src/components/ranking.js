import React from "react";
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Item2 from "./Item2";
import "./css/ranking.css";
import Medal from './img/medal.png'
import Like from './img/like.png'
import Heart from './img/heart.png'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 100, itemsToShow: 2 },
    { width: 200, itemsToShow: 3 },
    { width: 300, itemsToShow: 4 },
    { width: 400, itemsToShow: 5 },
];

function Ranking() {
    
    return (
        <>

            <br></br><br></br><br></br><br></br><br></br>
            <h1 style={{marginLeft: '10%'}}><img style={{widht: '50px', height: '50px', margin: '10px'}} src={Medal}></img>RANKING(TOP10)</h1>
            <h2 style={{ textAlign: "center", marginTop: '20px' }}><img style={{widht: '40px', height: '40px', margin: '10px', paddingBottom: '10px'}} src={Like}></img>Weekly Rank(Top 10)</h2>
            <div className="Ranking">
                <Carousel breakPoints={breakPoints}>
                    <Item>One</Item>
                    <Item>Two</Item>
                    <Item>Three</Item>
                    <Item>Four</Item>
                    <Item>Five</Item>
                    <Item>Six</Item>
                    <Item>Seven</Item>
                    <Item>Eight</Item>
                    <Item>Nine</Item>
                    <Item>Ten</Item>
                </Carousel>
            </div>
            <h2 style={{ textAlign: "center", marginTop: '20px' }}><img style={{widht: '40px', height: '40px', margin: '10px', paddingBottom: '6px'}} src={Heart}></img>Follow Rank(Top 10)</h2>
            <div className="Ranking">
                <Carousel breakPoints={breakPoints}>
                    <Item2>One</Item2>
                    <Item2>Two</Item2>
                    <Item2>Three</Item2>
                    <Item2>Four</Item2>
                    <Item2>Five</Item2>
                    <Item2>Six</Item2>
                    <Item2>Seven</Item2>
                    <Item2>Eight</Item2>
                    <Item2>Nine</Item2>
                    <Item2>Ten</Item2>
                </Carousel>
            </div>
        </>
    )
}

const rootElement = document.getElementById("root");
ReactDom.render(<Ranking />, rootElement);

export default Ranking;