import { useState } from "react"


export const App = () => { 

   const [estadoActual ,setEstadoActual]=useState(0) 

   const imagenes=[
    'src/assets/img/imagen1.jpg',
    'src/assets/img/imagen2.jpg',
    'src/assets/img/repostero.jpg',
    'src/assets/img/torta.jpg',
    'src/assets/img/torta11.jpg',
   ] 

    const parrafo=[ 
      'Brownie con frutilla',
      'Brownie chocolate marroc',
      'Curso de Cocina',
      'torta de Vainilla',
      'Torta Frutilla', 

    ] 

     const prevMove=()=>{
      setEstadoActual(est=>estadoActual===0?imagenes.length-1:est-1)
     }  

     const nextMove=()=>{
      setEstadoActual(est=>estadoActual===imagenes.length-1?0:est+1)
     } 



  return (
    <div className="slider"> 
    <div className="prev" onClick={prevMove}>&#10094;</div> 
    <div className="slides-container"> 

    {
      imagenes.map((img,index)=>(
        <div key={index} className={estadoActual===index?'slide active':'slide'} style={{backgroundImage:`url(${img})`}}>
          <p className={estadoActual===index?'paragraph active ':'paragraph '}>{parrafo[index]}</p>
        </div>
      ))
    }

    </div> 
    <div className="next" onClick={nextMove}>&#10095;</div> 

    </div>
  )
}
