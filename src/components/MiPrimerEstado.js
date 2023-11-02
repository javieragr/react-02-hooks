import React,{useState} from 'react'

export const MiPrimerEstado = () => {



    // let nombre = "Javier GTZ"
    // const CambiarNombre = e =>{
    //     nombre = "Pedrito Fennandez"
    // }

    const [nombre, setNombre] = useState( "Javier GTZ");

    const cambiarNombre = (e,nombreFijo) => {
        setNombre(nombreFijo)
    }

  return (
    <div>
        <h3>Componente: mi primer estado</h3>
        &nbsp;
        <strong>{nombre}</strong>
        <button onClick={e => cambiarNombre(e,"jagr")}> Cambiar</button>
        &nbsp;
        <input type='text' onKeyUp={e => cambiarNombre(e, e.target.value)} placeholder='Cambia el texto'  />
    </div>
  )
}
