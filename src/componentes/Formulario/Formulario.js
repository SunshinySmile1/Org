import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";


const Formulario = (props) => {

    const [nombre,setNombre] = useState("")
    const [puesto,setPuesto] = useState("")
    const [foto,setFoto] = useState("")
    const [equipo,setEquipo] = useState("") 

    const [titulo,setTitulo] = useState("")
    const [color, setColor] = useState("")

    const { registrarColaborador, crearEquipo } = props
    
    const manejarEnvio = (e) =>{
        e.preventDefault();
        console.log("Manjera el envío:");
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo            
        }
        registrarColaborador(datosAEnviar)
    };

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellene el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre" 
                placeholder="Ingresa nombre" 
                required 
                valor={nombre}
                setValor={setNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresa puesto" 
                required
                valor={puesto}
                setValor={setPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresa enlace de foto" 
                required
                valor={foto}
                setValor={setFoto}
            />
            <ListaOpciones 
                valor={equipo}
                setValor={setEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellene el formulario para crear el equipo.</h2>
            <Campo
                titulo="Titulo" 
                placeholder="Ingresa titulo" 
                required 
                valor={titulo}
                setValor={setTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresa el color en Hex" 
                required
                valor={color}
                setValor={setColor}
                type="color"
            />
             <Boton texto="Registrar equipo"/>
        </form>
    </section>
}


export default Formulario;