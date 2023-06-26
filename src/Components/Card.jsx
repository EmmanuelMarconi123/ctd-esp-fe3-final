import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const Card = ({ name, username, id }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }


  const [dentista, setDentista] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/users'


  useEffect(() => {

    axios.get(url)
      .then(res => setDentista(res.data))

  }, [])

  return (
    <div className="card">

      {
        dentista.map((element) => {
          return (
            <div key={element.id}>
              <h3>{element.name}</h3>
              <h4></h4>
            </div>
          )
        })
      }

      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}


      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
