import React from 'react';
import styles from './output.module.css';
// import Ball from '../../Ball';
import Number from '../number/number';

const Output = (numbers) => {
    const number = [];
    const balls = [];
    Object.values(numbers).map(items => {
        Object.entries(items).map(item => {
            if(item[1].count !== 2){
                balls.push(item[1].id)
                
        }})})
    const shuffle = [];
    Object.values(numbers).map(items => {
        Object.entries(items).map(item => {
            if(item[1].count === 1){
                shuffle.push(item[1].id)
        }})})
        while (balls.length > 0) {
            shuffle.push(balls.splice(Math.floor(Math.random() * balls.length), 1)[0]);
        }
    const set = new Set(shuffle);
    const unique = [...set];

    const bonus = unique[6];
    const winBalls = unique.slice(0, 6).sort((a, b) => a - b);
    
    console.log(winBalls);
    console.log(bonus);
    // const onbutton = () => {return(number.splice(0,number.length,(number.push(winBalls),number.push(bonus))))}
    // (number.splice(0,number.length,(number.push(winBalls),number.push(bonus))))
    console.log(number);

        return (
            <ul className={styles.output}>
                <div>
                <button onClick={() => number.splice(0,number.length,(number.push(winBalls),number.push(bonus)))}>출력</button>
                {/* <button>공유</button> */}
                {/* {console.log(number)} */}
                </div>
                <Number onbutton={number}/ >
                {/* <span>
                <div className={styles.list}>
                    <div>당첨 숫자</div>
                <span>
                {winBalls.map((v) => (
                    <Ball key={v} number={v} />
                ))}
                </span>
                </div>
                <div className={styles.bonus}>
                    <div>보너스</div>
                    {bonus && <Ball key={bonus} number={bonus} />}
                </div>
                </span> */}
            </ul>
            )};

export default Output;