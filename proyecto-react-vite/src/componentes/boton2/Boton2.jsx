import './Boton2.css';

function Boton2(props) {
  const estilosBoton2 = {
    backgroundColor: props.color,
  }
  return(
  <div> 
  <button style={estilosBoton2} onClick={props.onClick} className='boton2'> {props.texto} </button>
  </div>
  )
}

export default Boton2;