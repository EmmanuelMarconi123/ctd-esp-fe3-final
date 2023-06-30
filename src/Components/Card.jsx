import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useContexGlobal } from './utils/global.context';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';


const Card = ({ name, username, id }) => {

  const { state, dispatch } = useContexGlobal()
  const [isFavorite, setIsFavorite] = useState(false);

  // Aqui iria la logica para agregar la Card en el localStorage

  useEffect(()=>{
    console.log('se renderizo la card nuevamente');
  },[isFavorite])
 
  
  const addFav = () => {
    let foundObjet = (state.dentistasFav.find(obj => obj.id === id))
    if (foundObjet) {
      alert('you cannot add the same dentist twice')
    } else {
      dispatch({
        type: 'addFavs', payload: [...state.dentistasFav, { name: name, userName: username, id: id }]
      });
    }
    setIsFavorite(true)
  };

  const removeFav = () => {
    if (state.dentistasFav.length >= 0) {
      const updatedFavorites = state.dentistasFav.filter((card) => card.id !== id)
      dispatch({type: 'delete_fav', payload: updatedFavorites})
      setIsFavorite(false)
    }};


  return (
    <div key={id} className="card">
      
      <Link to={'/detail/' + id}>
        <img src="./images/doctor.jpg" alt="imagen doctor" className="imgHome" />
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='h6'>{username}</Typography>
        <p> Dentist ID: {id}</p>
      </Link>

      <Button variant="contained" type='submit' onClick={ isFavorite ? removeFav : addFav }>
        {isFavorite ? 'Delete Favs' : 'Add Favs'}
      </Button>


      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

    </div >
  )
};

export default Card;










