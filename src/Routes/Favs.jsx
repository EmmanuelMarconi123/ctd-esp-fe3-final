import { Button, Link, Typography } from "@mui/material";
import Card from "../Components/Card";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Favs = () => {

  const dentistFav = JSON.parse(localStorage.getItem('favoritos'))

  console.log(dentistFav);

  return (
    <>
      <Typography color={'primary'} variant="h4" align="center" >Dentists Favs</Typography>
      <div className="card-grid">
        {dentistFav &&
          dentistFav.map((dentista) => (
            <Card
              name={dentista.name}
              username={dentista.userName}
              id={dentista.id}
            />
          ))}
      </div>
      {/* este componente debe consumir los destacados del localStorage */}
      {/* Deberan renderizar una Card por cada uno de ellos */}

    </>
  );
};

export default Favs;
