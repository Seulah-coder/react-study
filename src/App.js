
import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
import {func} from "prop-types";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onclick = () => setValue((prev) => prev +1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("I run all the time.");

    useEffect(() => {
        console.log("I run only once.");
    }, []);
    //empty array = only runs one time when the page is loaded

    useEffect(() => {
        console.log("I run when 'keyword' changes.")
    }, [keyword]);

    useEffect(() => {
        console.log("I run when 'counter' changes.")
    }, [counter]);

    const [showing, setShowing] = useState(false);
    const onClickShowing = () => setShowing((prev) => !prev);

    function Hello(){
        function byFn(){
            console.log("bye:(")
        }
        function hiFn(){
            console.log("created :)");
            return byFn;
        }
        useEffect(hiFn, []);
        //no dependency
        return <h1>Hello</h1>;
    }


    return (<div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
    <h1 className={styles.title}>Welcome back!</h1>
            <Button text={"Continue"}/>
            <h1>{counter}</h1>
            <button onClick={onclick}>click me</button>
            {showing ? <Hello /> : null}
            <button onClick={onClickShowing}>{showing ? "Hide" : "Show"}</button>
    </div>
    );
}

export default App;
