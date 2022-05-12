import {useState} from "react";

function SmartCounter () {
    const [quantity, upQuantity] = useState(1);
    //retorna um vetor
    //1. Variavel stateful
    //2. função amarrada a essa variavel que atualiza esse valor
    return (
        <>
        <h1>{quantity}</h1>
        <button onClick={() => upQuantity(quantity + 1)}>Aumentar</button>
        </>
    )
}
export default SmartCounter;