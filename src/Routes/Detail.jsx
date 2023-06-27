import { CardContent, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [dent, setDent] = useState({})

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setDent(res.data))
  }, [id])

  console.log(dent);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      {dent ?
        <CardContent>
          <Typography variant='h1' sx={{ fontSize: 14, color: red }} color="text.secondary" gutterBottom>Detail Dentist con id: {id}</Typography>
          <Typography variant="h5" component="div">{dent.name}</Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">{dent.email}</Typography>
          <Typography variant="body2"> Website: www.{dent.website}</Typography>
        </CardContent>
        : <h1>Para poder ver los Detalles debes ir a Home y seleccionar un denista</h1>
      }
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail