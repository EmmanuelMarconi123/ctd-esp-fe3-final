import { useContexGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import Button from '@mui/material/Button';
import { useEffect } from 'react';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

  const { state, dispatch } = useContexGlobal()

  const toggle = () => {
    dispatch({type: 'dark', payload: !state.theme})
  }

  useEffect(() => {
   document.body.classList.toggle('dark');
 }, [state.theme]);

  return (
    <nav>
      <Link to={routes.home}><h4 className='link'> HOME </h4></Link>
      <Link to={routes.contact}><h4 className='link'>CONTACT</h4></Link>
      {/* <Link to={routes.datail}><h4 className='link'>DETAILS</h4></Link> */}
      <Link to={routes.favs}><h4 className='link'>FAVS</h4></Link>

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Button variant="contained" onClick={toggle}>Theme</Button>
      
    </nav>
  )
}

export default Navbar