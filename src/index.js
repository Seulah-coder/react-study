import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Count(){
    const [counter, setCounter] = React.useState(0);
    const onClick = () => {
        // setCounter(counter + 1)
        setCounter((current) => current+ 1);

    };

}



// const span = React.createElement("span", {
//     id : "test-span",
//     onMouseEnter: () => console.log("mouse enter"),
//     },
//     "hello I'm a span"); //same as html element's name 1.html type 2.property 3.contents
// const btn = React.createElement(
//     "button",
//     {
//         onClick: () => console.log('im clicked'),
//     },
//         "Click me"
//     );
const button = ( <button style={{backgroundColor : "tomato",}} onClick={() => console.log("i am clicked")}>click me</button>);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
