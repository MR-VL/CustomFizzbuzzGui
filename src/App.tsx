import './App.css';
import Calculate from './Calculate.tsx';
import { useState } from 'react';

function App() {
    const [inputVal, setInputVal] = useState('');
    const[divisor1, setDivisor1] = useState(3);
    const[divisor2, setDivisor2] = useState(5);
    const[word1, setWord1] = useState("Fizz");
    const[word2,setWord2] = useState("Buzz")
    const [output, setOutput] = useState<React.ReactNode>(null);



    const handleInputVal = (e) => {
        setInputVal(e.target.value);
    };


    const handleSetDivisor1 = (e)=>{
        setDivisor1(e.target.value);
    }
    const handleSetDivisor2 = (e)=>{
        setDivisor2(e.target.value);
    }

    const handleSetWord1 = (e)=>{
        setWord1(e.target.value);
    }
    const handleSetWord2 = (e)=>{
        setWord2(e.target.value);
    }
    const handleSubmit = () => {
        const result = Calculate(inputVal, divisor1, divisor2, word1, word2);
        setInputVal('');
        setOutput(result);

        setInputVal('')
    };

    return (
        <div className={"container"}>

            <div className={"left"}>
                <h2 className={"custom"}>Custom FizzBuzz</h2>
                <div className="form-group">
                    <label>Enter a number:</label>
                    <input type="text" className={"inp"} onChange={handleInputVal} value={inputVal}/>
                </div>

                <div className="form-group">
                    <label>Enter Word 1:</label>
                    <input type="text" className={"inp"} onChange={handleSetWord1} value={word1}/>
                </div>

                <div className="form-group">
                    <label>Enter Word 2:</label>
                    <input type="text" className={"inp"} onChange={handleSetWord2} value={word2}/>
                </div>

                <div className="form-group">
                    <label>Enter Divisor 1:</label>
                    <input type="text" className={"inp"} onChange={handleSetDivisor1} value={divisor1}/>
                </div>

                <div className="form-group">
                    <label>Enter Divisor 2:</label>
                    <input type="text" className={"inp"} onChange={handleSetDivisor2} value={divisor2}/>
                </div>

                <input type="submit" value="Submit" className={"btn"} onClick={handleSubmit}/>
            </div>
            <div className={"right"}>
                <div className={"output"}>{output}</div>
            </div>


        </div>
    );
}

export default App;
