import React from 'react'
import Form from '../Components/Form'
import { Typography } from '@mui/material'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div >
      <Typography color='primary' variant='h5' align='center'>Want to know more?</Typography>
      <Typography color={'primary'} variant='h6'align='center'>Send us your questions and we will contact you</Typography>
      <Form/>
    </div>
  )
}

export default Contact