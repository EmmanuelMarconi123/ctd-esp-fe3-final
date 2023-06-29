import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [dent, setDent] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setDent(res.data))
  }, [id])

 // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>

       <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Detail Dentist with id: {id}
            </Typography>
            <Typography variant="h5" component="div">
              {dent.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {dent.email}
            </Typography>
            <Typography variant="body2">
              <Link >www.{dent.website}</Link>

            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}
export default Detail


