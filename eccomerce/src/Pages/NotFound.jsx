import React from 'react'
import { ReactComponent as NoneData } from "../Assets/no-data.svg";

export const NotFound = () => {
 
  return (<>
    <h1>No se han realizado busquedas</h1>
    <NoneData style={{ width: "500px", height: "500px" }} />
    </>
  )
}
