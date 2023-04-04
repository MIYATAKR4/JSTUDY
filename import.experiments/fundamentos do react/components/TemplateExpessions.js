const TemplateExpressions = () => {
    
    const name = "Catarina";
    const data = {
        age: 20,
        role: 'estudante'
    };

    return (
        //imprime o valor da var
        //dento das chaves, existe lógica JS
        <div>
            <p>User: {name} </p>
            <p>{data.age}</p>
            <p>{data.role}</p>
            <p> você vai fazer {2023 - 2002} anos esse ano</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
}

export default TemplateExpressions;