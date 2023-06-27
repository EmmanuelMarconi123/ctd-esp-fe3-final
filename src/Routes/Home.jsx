import Card from '../Components/Card'
import { useContexGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useContexGlobal()
  console.log(state);

  return (
    <main className="" >
      <h1>List of Dentist</h1>
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