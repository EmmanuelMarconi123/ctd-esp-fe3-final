import { Typography } from "@mui/material";
import Card from "../Components/Card";
import { useContexGlobal } from "../Components/utils/global.context";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Favs = () => {

  const dentistFavorite = JSON.parse(localStorage.getItem('favoritos'))

  const {state} = useContexGlobal()

  return (
    <>
      <Typography color={'primary'} variant="h4" align="center" >Dentists Favs</Typography>
      <div className="card-grid">
        {state.dentistasFav &&
          state.dentistasFav.map((dentista) => (
            <Card
              name={dentista.name}
              username={dentista.userName}
              id={dentista.id}
              key={dentista.id}
            />
          ))}
      </div>
      {/* este componente debe consumir los destacados del localStorage */}
      {/* Deberan renderizar una Card por cada uno de ellos */}

    </>
  );
};

export default Favs;
