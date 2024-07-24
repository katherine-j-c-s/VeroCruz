import React, { useEffect, useState } from 'react'
import Presentacion from './Presentacion'
import { useParams } from 'react-router-dom'
import { infoCursos } from './InfoCursos'
import { ResumenCurso } from './ResumenCurso'
import { Temario } from './Temario'
import AcercaDe from './AcercaDe'
import MasInfo from './MasInfo'

export default function Curso() {
  const [info, setInfo] = useState()
  
  const {id} = useParams()

  useEffect(()=>{
    setInfo(infoCursos[id])
  },[id])
  return (
    <div>
      {info ? 
        <>
          <Presentacion title={info.title} ></Presentacion>
          <ResumenCurso curso={info} ></ResumenCurso>
          <Temario temas={info.temas}></Temario>
          <AcercaDe></AcercaDe>
          <MasInfo></MasInfo>
        </>
      : null}
    </div>
  )
}
