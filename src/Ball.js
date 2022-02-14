import React, { memo } from 'react';
import styles from './ball.module.css'

const Ball = memo(({ number }) => {
  let background;
  if (number < 10) {
    background = 'orange';
  } else if (number < 20) {
    background = 'skyblue';
  } else if (number < 30) {
    background = 'red';
  } else if (number < 40) {
    background = 'grey';
  } else {
    background = 'green';
  }
  return (
    <div className={styles.ball} style={{ backgroundColor: background }}>
      {number}
    </div>
  );
});

export default Ball;