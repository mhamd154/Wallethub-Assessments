/**
 * In the following React template, modify the component so that the counter correctly displays and it increments by one whenever the button is pressed. 
 * You are free to add classes and styles, but make sure you leave the element ID's as they are.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  btnStyle: {
    backgroundColor:' #00807ae0',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 600,
    padding: '10px',
  },

  textStyle:{
    color: '#00807ae0',
    fontSize: '15px'
  }

} as const;

const Counter = () => {
  const [count, setCount] = useState(0)

    return (
      <div id="mainArea">
        <p style={style.textStyle}>button count: <span>{count}</span></p>
        <button style={style.btnStyle} id="mainButton" onClick={() => setCount(count + 1)}>Increase is at <span>{count}</span></button>
      </div>
    );
  }


ReactDOM.render(
  <Counter />,
  document.getElementById('test-02')
);