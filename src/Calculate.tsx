function Calculate(val, divisor1, divisor2, word1,word2){



    if (val === '')
        return <h1>{val}</h1>


    if (val % divisor2 === 0 && val % divisor1 ===0){
        return<h1>{word1+word2}</h1>;
    }

    if (val % divisor2===0){
        return<h1>{word2}</h1>;
    }

    if (val % divisor1 === 0) {
        return<h1>{word1}</h1>;
    }

    else return<h1>{val}</h1>;
}

export default Calculate;