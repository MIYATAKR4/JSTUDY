// criando e exportando componente: 
/* Um componente JavaScript é uma parte reutilizável de código escrito em JavaScript que encapsula uma funcionalidade específica
e pode ser facilmente integrado em um aplicativo ou website. Isso ajuda a economizar tempo e esforço, além de reduzir erros, 
é frequentemente construído usando bibliotecas ou estruturas JavaScript. */
import CompTest from "./CompTest.js";

const FirstComponent = () => {
    return (
        <div>
            <h1>Meu Primeiro Componente</h1>
            <CompTest />
        </div>
    )
};

export default FirstComponent;