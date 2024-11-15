
import React, { useState, useEffect } from 'react';
import './CounterApp.css';

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  const [showPopup, setShowPopup] = useState(false);


  const handleIncrement = () => {
    if (count < 1000) {
      setCount(prevCount => {
        const newCount = prevCount + incrementValue;
       
        if (newCount >= 10 && newCount < 100) {
          setIncrementValue(10);
        } else if (newCount >= 100 && newCount < 1000) {
          setIncrementValue(100);
        }
        return newCount;
      });
    }
  };

  const handleDecrement = () => {
    if ( count > 100) {
      setCount(prevCount => Math.max(prevCount - 100, 0));
      if (count - 100 < 100) {
        setIncrementValue(10);
      }
    } else if (count <= 100 && count > 10) {
      setCount(prevCount => Math.max(prevCount - 10, 0));
      if (count - 10 < 10) {
        setIncrementValue(1);
      }
    } else if (count > 0 && count <=10) {
      setCount(prevCount => Math.max(prevCount - 1, 0));
    }
  };

  
  const showPopupIfNeeded = () => {
    if (count === 10 || count % 100 === 0) {
      setShowPopup(true);
    }
  };

 
  useEffect(() => {
    showPopupIfNeeded();
  }, [count]);

 
  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div className='my-Counter-app'>
       <h1>Count: {count}</h1>
      <button className='btn-color' onClick={handleIncrement} >
        increase
      </button>
      <button className='btn-color' onClick={handleDecrement}>
        decrease
      </button>
      {showPopup && (
        <div className="popup">
          <p>counter!</p>
          <button className='btn-color' onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};


