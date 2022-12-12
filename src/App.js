import logo from './logo.svg';
import './App.css';
import React from 'react';
import PropTypes from "prop-types";

function Btn({banana, big, changeValue, fontSize = 16}) {
    //prop.banana = {banana}
    console.log(banana, big);
    console.log(banana, "was rendered")
    console.log(fontSize);
    return <button
        onClick={changeValue}
        style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            // fontSize: big? 18 : 16
            fontSize: fontSize,
        }}
    > {banana}
    </button>
}

//reuseable button

//if the component changes the state, make it re-render

//reactMemo - we can decide which one should be rendered***
const MemorizedBtn = React.memo(Btn);

//at least to get warning(nice warning for developer)
Btn.propTypes = {
    banana: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
    x : PropTypes.bool
}
function App() {
    const [value, setValue] = React.useState("Save Changes");
    const changeValue = () => setValue("Revert Changes");
    //함수를 btn에 argument로 보내기
    return (<div>
        <MemorizedBtn banana={value} changeValue={changeValue} x={false} big={true} fontSize={18}/>
        <MemorizedBtn banana="Continue" y={7}/>
        {/*<Btn banana={value} changeValue={changeValue} x={false} big={true}/>*/}
        {/*<Btn banana="Continue" y={7}/>*/}
    </div>);

}

export default App;
