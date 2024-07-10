import React from 'react'
import Inicio from './Inicio/Inicio'
import Servicios from './Servicios/Servicios'
import OtrosServicios from './OtrosServicios/OtrosServicios'
import ConsultaGratis from './ConsultaGratis/ConsultaGratis'
import Comentario from './Comentario/Comentario'

export const Home = () => {
  return (
    <>
      <Inicio></Inicio>
      <Servicios></Servicios>
      <OtrosServicios></OtrosServicios>
      <ConsultaGratis></ConsultaGratis>
      <Comentario></Comentario>
    </>
  )
}
