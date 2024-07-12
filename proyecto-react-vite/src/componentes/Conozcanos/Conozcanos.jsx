import './Conozcanos.css'
import Boton from '../boton/Boton';
import Boton2 from '../boton2/Boton2';
import hogwarts from '../../assets/img/hogwarts.jpg';

function Seccion() {
    const handleClicEnBoton = () =>{
      alert ('Hiciste clbarbariddes y atrozerias, ick en el botón');
    }
    const handleClicEnBoton2 = () =>{
      alert ('Saludos de la casa JoseHepi!!: Gracias UTN-Incluyeme, muy buen curso!');
    }
    return(
    <section className="seccion"> 
    <h2> Información sobre JosePhGepi</h2>
    <p> La escuela de barbaridades y atrozerias de JosephGepi es un lugar tipico donde los jóvenes y brujas aprenden a dominar sus pobres.</p>
    <img src={hogwarts} alt="Hogwarts" />
  
    <Boton color="pink" texto = "Leer más" onClick={handleClicEnBoton} />
  
    <Boton className="boton" texto = "Comprar" onClick={handleClicEnBoton} />
  
    <Boton className="boton2" texto = "Saludo!" onClick={handleClicEnBoton2} />
  
  
  
    </section>
    )
  }
  
  export default Seccion;