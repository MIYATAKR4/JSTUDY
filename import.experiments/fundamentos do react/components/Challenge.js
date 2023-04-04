const Challenge = () => {

    const numbers = (n1, n2) =>{
        return { n1, n2 };
    }

    const soma = () => {
        const {n1, n2} = numbers(25,35);
        return n1 + n2;
    };

    return (
        <div>
            <div> 25 + 35 </div>
            <div> 
                <button onClick={() => console.log(soma())}> SOMAR </button>
            </div>
        </div>
    )


};

export default Challenge;
