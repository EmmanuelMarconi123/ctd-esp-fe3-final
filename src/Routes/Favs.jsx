import { Typography } from "@mui/material";
import Card from "../Components/Card";
import { useContexGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useContexGlobal()

 
  return (
    <>
      <Typography color={'primary'} variant="h4" align="center" >Dentists Favs</Typography>
      <div className="card-grid">
        {state.dentistasFav.length > 0 ?
          state.dentistasFav.map((dentista) => (
            <Card
              name={dentista.name}
              username={dentista.userName}
              id={dentista.id}
              key={dentista.id}
            />
          )): <p> No favorites yet </p>}
      </div>

      {/* Deberan renderizar una Card por cada uno de ellos */}

    </>
  );
};

export default Favs;
