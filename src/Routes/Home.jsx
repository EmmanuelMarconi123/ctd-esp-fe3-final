import { Typography } from '@mui/material';
import Card from '../Components/Card'
import { useContexGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useContexGlobal()

  console.log('estos son mis favs:');
  console.log(state.dentistasFav);

  return (
    <main className="" >
      <Typography sx={{ fontSize: 50 }} variant='h1' color="primary"> List of Dentist</Typography>
      <div className='card-grid'>
        {state.dentista.map(dentista => (
          <Card
            key={dentista.id}
            name={dentista.name}
            username={dentista.username}
            id={dentista.id}
          />
        ))}
      </div>
    </main>
  )
}

export default Home