import React from 'react';
import styles from './output.module.css';
import Number from '../number/number';


const Output = ({numbers, onReset}) => {
    const number = [];
    const balls = [];
    numbers.map(item => {
            if(item.count !== 2){
                balls.push(item.id)
        }});
    const shuffle = [];
    numbers.map(item => {
        if(item.count === 1){
            shuffle.push(item.id)
        }})
        while (balls.length > 0) {
            shuffle.push(balls.splice(Math.floor(Math.random() * balls.length), 1)[0]);
        };
    const set = new Set(shuffle);
    const unique = [...set];
    const bonus = unique[6];
    const winBalls = unique.slice(0, 6).sort((a, b) => a - b);
    
    (number.splice(0,number.length,(number.push(winBalls),number.push(bonus))));


    const {Kakao} = window;

    const onClick= () =>{
        Kakao.Link.sendCustom({
            templateId: 71165,
            templateArgs: {
              'title': '추천 번호입니다',
              'description': `${winBalls} + ${bonus}`
            }
          });
    };

    const Reset = () => {
        onReset();
    };
    

    return (
        <div className={styles.output}>
            <div className={styles.buttons}>
                <button className={styles.kakao} onClick={onClick}></button>
                <button className={styles.reset} onClick={Reset}></button>
            </div>
            <Number onbutton={number}/ >
        </div>
        );
    };

export default Output;