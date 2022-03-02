import { useState } from "react"

const Main=(props) =>{
    const  resultado=useState() 
    const [contador, setContador] = useState(props.initial)
    
    
    //nunca dentro de un condicional if o bucle for
    // devuelve  un array
    
    
    const handleClick=() => {
        //contador++ NOOO
        
        setContador(contador + 1)

    }
    const restar = () => {
        setContador(contador - 1)
    }

    const resetear = () => {
        setContador(0)
    }


    console.log(props)
    
    return (
    <main className='container'>
        <p> Bienvenido {props.nombre}  {props.apellido} de {props.edad} años </p>
        <p> usuarios {props.usuarios}</p>
        <p>Mi contador actual: {contador}</p> 
        <button  onClick={handleClick}>Aumentar</button>
        <button onClick={resetear}>resetear</button>
        <button onClick={restar}>restar</button>
    </main>
    );

}
export default Main;



