import Output from '../output/output';
import styles from './select.module.css';
import React, { Component } from 'react';


class Select extends Component {
    state ={
         numbers :[
    {id:1,count: 0}, {id: 2, count: 0}, {id:3, count:0}, {id:4,count:0},
    {id:5,count:0}, {id:6,count:0}, {id:7,count:0}, {id:8,count:0},
    {id:9,count:0}, {id:10,count:0}, {id:11,count:0}, {id:12,count:0},
    {id:13,count:0}, {id:14,count:0}, {id:15,count:0}, {id:16,count:0},
    {id:17, count:0}, {id: 18, count:0}, {id:19,count: 0}, {id: 20, count: 0},
    {id:21,count:0}, {id:22,count:0}, {id:23,count:0}, {id:24,count:0},
    {id:25,count:0}, {id:26,count:0}, {id:27,count:0}, {id:28,count:0},
    {id:29,count:0}, {id:30,count:0}, {id:31,count:0}, {id:32,count:0},
    {id:33, count:0}, {id: 34, count:0},{id:35,count: 0}, {id: 36, count: 0},
    {id:37,count:0}, {id:38,count:0}, {id:39,count:0}, {id:40,count:0},
    {id:41,count:0}, {id:42,count:0}, {id:43,count:0}, {id:44,count:0},
    {id:45,count:0},
    ],
        button :[
            {add:1,del:0}
        ],
};

    handleAdd = (evnet) => {
        const button = this.state.button.map(bttn => {
            if(evnet === 'add'){
                if(bttn.add === 1){
                    return {...bttn, add:0,del:0}
                }
                return {...bttn, add:1,del:0}
            }
            if(evnet ==='del'){
                if(bttn.del === 1){
                    return {...bttn, add:0,del:0}
                }
                return {...bttn, add:0,del:1}
            }
            return bttn;
        });
        this.setState({button});
    };



    // handleIncrement = number => {
    //     const numbers = this.state.numbers.map(item => {
    //         if(item.id === number.id){
    //             if(number.count < 2){
    //             return {...number, count:number.count+1}
    //         }
    //         return {...number,count:0}
    //         }
    //         return item;
    //     });
    //     this.setState({numbers});
    // };

    handleIncrement = number => {
        const numbers = this.state.numbers.map(item => {
            if(item.id === number.id){
                if(number.count === 0){
                    if(this.state.button[0].del === 1){
                        return {...number, count:2}
                    }
                    if(this.state.button[0].add === 1){
                        return {...number, count:1}
                    }
                    return {...number, count:number.count}
            }
            return {...number,count:0}
            }
            return item;
        });
        this.setState({numbers});
    };

    handleReset = () => {
        const numbers = this.state.numbers.map(number => {
            if(number.count !== 0){
             return{...number, count : 0}
        }
        return number;
    });
        this.setState({numbers});
        };
    
    
    render() {
        return (
    <section className={styles.select}>
        <ul className={styles.numberbutton}>
            <div>
                <Output 
                numbers={this.state.numbers}
                onReset={this.handleReset}/>
            </div>
        <div className={styles.numbers}>

        {   
            this.state.numbers.map(number => 
            <button
            key={number.id}
            onClick={() => this.handleIncrement(number)}
            className={`${styles.button} ${number.count === 0 ? styles.white : number.count === 1 ? styles.grey : styles.pink }`}>
                {number.id}
            </button>
            )
        }
        <div className={styles.AddandDel}>
        <button 
        className={`${styles.Addnumber} ${this.state.button[0].add === 0 ? styles.white : styles.grey}`}
        onClick={() => this.handleAdd('add')}>추가</button>
        <button 
        className={`${styles.Delnumber} ${this.state.button[0].del === 0 ? styles.white : styles.pink}`}
        onClick={() => this.handleAdd('del')}>제거</button>
        </div>
        </div>
        </ul>
    </section>
        );
    }
}

export default Select;