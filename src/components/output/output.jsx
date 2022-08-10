import React from 'react';
import styles from './output.module.css';
import Number from '../number/number';


const Output = ({numbers, onReset}) => {
    const number = [];
    const balls = [];
    Object.values(numbers).map(item => {
            if(item.count !== 2){
                balls.push(item.id)
        }})
        
    Object.values(numbers).map(num => {
        console.log(num.count);
    })
    const shuffle = [];
    Object.values(numbers).map(item => {
        if(item.count === 1){
            shuffle.push(item.id)
        }})
        while (balls.length > 0) {
            shuffle.push(balls.splice(Math.floor(Math.random() * balls.length), 1)[0]);
        }
    const set = new Set(shuffle);
    const unique = [...set];
    const bonus = unique[6];
    const winBalls = unique.slice(0, 6).sort((a, b) => a - b);
    
    (number.splice(0,number.length,(number.push(winBalls),number.push(bonus))))


    const {Kakao} = window;

    const onClick=() =>{
        Kakao.Link.sendCustom({
            templateId: 71165,
            templateArgs: {
              'title': '추천 번호입니다',
              'description': `${winBalls} + ${bonus}`
            }
          });
    }

    const Reset = () => {
        onReset();
    }
    

        return (
            <ul className={styles.output}>
                <div>
                    <button className={styles.button} onClick={onClick}></button>
                    <button className={styles.reset} onClick={Reset}></button>
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