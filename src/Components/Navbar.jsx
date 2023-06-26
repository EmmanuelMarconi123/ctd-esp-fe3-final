import React from 'react'
import {useContext} from 'react'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  
  const {dark, setDark, effect} = useContext( ContextGlobal )

  const changeTheme = (e)=> {
    setDark(true)
  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar