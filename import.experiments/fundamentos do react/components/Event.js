const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log('ativou o evento');
    };

    const renderFunc = (x) => {
        // a func verifica se o valor de x é válido, se não for, executa o else.
         if (x){
            return <h1>RENDERIZANDO ISTO</h1>
        } else {
            return <h1>renderizando isto</h1>
        }
    };


    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('clicado')}>Clique aqui 2</button>
            </div>
            {renderFunc(true)}
            {renderFunc(false)}
        </div>
    )

}

export default Events;

