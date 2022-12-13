import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [currentPrice, setCurrentPrice] = useState(1);
    const [amount, setAmount] = useState(1);


    const onChange = (event) => {
        console.log(event.target.value);
        setCurrentPrice(event.target.value);
        setAmount(1);
    }

    const inputAmount = (event) => {
        console.log(event);
        setAmount(event.target.value);
    }

    useEffect(()=> {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json)
                setLoading(false)
            });
    },[])
    return (<div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>
            {loading ? <strong>Loading...</strong>: <select onChange={onChange}>
                {coins.map((coin) => <option key={coin.id} value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)}
            </select>}
            <h2>Please enter the amount</h2>
            <div>
                <input type="number" value={amount} onChange={inputAmount} placeholder="USD"/>
            </div>
            <h2>you can get {amount/currentPrice}</h2>

    </div>
    );
}

export default App;
