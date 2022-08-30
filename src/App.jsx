import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Output } from "./components/Output";

function deductFromDiff(diff, currency) {
  const numberOfCurrency = Math.floor(diff / Number(currency));
  diff = diff - numberOfCurrency * Number(currency);
  return [diff, numberOfCurrency];
}

const App = () => {
  const [showCashGiven, setShowCashGiven] = useState(false);
  const [bill, setBill] = useState("");
  const [cash, setCash] = useState("");
  const [change, setChange] = useState({
    2000: 0,
    500: 0,
    100: 0,
    20: 0,
    10: 0,
    5: 0,
    1: 0,
  });
  const billInputHandler = (e) => {
    setBill(e.target.value);
  };
  const cashInputHandler = (e) => {
    setCash(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let diff = Number(cash) - Number(bill);
    if (diff < 0) {
      setChange("money insufficient");
    } else {
      const numberOfCurrency = {
        2000: 0,
        500: 0,
        100: 0,
        20: 0,
        10: 0,
        5: 0,
        1: 0,
      };
      [diff, numberOfCurrency["2000"]] = deductFromDiff(diff, "2000");
      [diff, numberOfCurrency["500"]] = deductFromDiff(diff, "500");
      [diff, numberOfCurrency["100"]] = deductFromDiff(diff, "100");
      [diff, numberOfCurrency["20"]] = deductFromDiff(diff, "20");
      [diff, numberOfCurrency["10"]] = deductFromDiff(diff, "10");
      [diff, numberOfCurrency["5"]] = deductFromDiff(diff, "5");
      [diff, numberOfCurrency["1"]] = deductFromDiff(diff, "1");

      setChange(numberOfCurrency);
    }
  };

  useEffect(() => {
    if (bill !== "") setShowCashGiven(true);
    else {
      setShowCashGiven(false);
      setCash("");
    }
  }, [bill, change]);

  return (
    <div className="App">
      <Header />
      <form className="input">
        <label>Bill Amount</label>
        <input type="number" value={bill} onChange={billInputHandler} />
        {showCashGiven && (
          <>
            <label>Cash Given</label>
            <input type="number" value={cash} onChange={cashInputHandler} />
          </>
        )}
        <button type="submit" onClick={onSubmitHandler}>
          Check
        </button>
      </form>
      <Output change={change} />
    </div>
  );
};

export default App;

/**
 * 243, 2000
 * 2000 - 243
 */
