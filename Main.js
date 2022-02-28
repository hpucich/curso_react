const Main=(props) =>{
    console.log(props)
    return (
    <main className='container'>
        <p> Bienvenido {props.nombre}  {props.apellido} </p>
        <p>  edad {props.edad+1} </p>
        <p> usuarios {props.usuarios}</p>
        {props.children}
    </main>
    );

}
export default Main;



