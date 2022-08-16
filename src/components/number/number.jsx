import React from 'react';
import Ball from '../../Ball';
import styles from './number.module.css'

const Number = ({onbutton}) => {
    const winBalls = onbutton[1];
    const bonus = onbutton[2];
    if (winBalls != null){
    return(
    <span className={styles.Balls}>
        <div className={styles.list}>
            <div>당첨 숫자</div>
        <span>
                {
                winBalls.map((v) => (
                    <Ball key={v} number={v} />
                ))
                }
        </span>
        </div>
        <div className={styles.bonus}>
            <div>보너스</div>
            {bonus && <Ball key={bonus} number={bonus} />}
        </div>
        </span>
        )
    } else {
        return(
            <span>
        <div className={styles.list}>
            <div>당첨 숫자</div>
        <span>
                
        </span>
        </div>
        <div className={styles.bonus}>
            <div>보너스</div>
            
        </div>
        </span>
        )
    }
};

export default Number;