import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";


function App() {
    const edad=56
    const usuarios=["Juan", "Pedro","Maria"]
    
    return (
        <>
            <Header/>
            <Main/>

            <Footer/>

        </>

    )

}

export default App

/*
<Main 
                nombre='Hernan'
                apellido='pucich' 
                edad={edad}
                usuarios={usuarios}/>
            <Main 
                nombre='Hernan'
                apellido='pucich' 
                edad={edad}
                usuarios={usuarios}>

                <p>Hola Mundo</p>
                <p>Hola Mundo 2</p>        
            
                </Main>
                */