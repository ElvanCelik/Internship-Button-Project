import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('count');
        return savedCount ? parseInt(savedCount, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem('count', count);
        return ( 

        ) =>{
            
        }
    }, []);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="counter">
            <div className="count-display">{count}</div>
            <button className="btn btn-primary" onClick={increment}>Artır</button>
            <button className="btn btn-secondary" onClick={decrement}>Azalt</button>
        </div>
    );
}

export default Counter;