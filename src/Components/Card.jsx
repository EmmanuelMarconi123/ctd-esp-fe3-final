import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {

  const [listadoFavoritos, setListadofavoritos] = useState([])

  const addFav = () => {
    setListadofavoritos(...listadoFavoritos)
    localStorage.setItem('favoritos', JSON.stringify( listadoFavoritos ))

    // Aqui iria la logica para agregar la Card en el localStorage
  }


  return (
    <div className="card">
      <Link to={'detail/' + id}>
        <img src="./images/doctor.jpg" alt="imagen doctor" className="imgHome" />
        <h4>{name}</h4>
        <h5>{username}</h5>
        <p> The id of this Dentis is: {id}</p>
      </Link>

      <Button variant="contained" type='submit' onClick={addFav}>Add Favs</Button>


      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

    </div >
  )
};

export default Card;










