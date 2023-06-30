import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button, Grid } from "@mui/material";
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Form = () => {
  const [mensaje2, setMensaje2] = useState(false)

  const initialValues = {
    name: '',
    email: '',
    coment: ''
  }

  const sendForm = (data, { resetForm }) => {
    console.log(data);
    setMensaje2(true);
    localStorage.setItem('userName', data.name);
    localStorage.setItem('email', data.email);
    resetForm();
  }

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    initialValues: initialValues,
    onSubmit: sendForm,
    validationSchema: Yup.object({
      name: Yup.string().min(5).required("You must enter a name with at least 5 characters"),
      email: Yup.string().email().required("You must enter a valid email")
    }),
  });

  return (
    <>
      <form className='class-container' id='form' onSubmit={handleSubmit}>
        <Grid container alignItems={'center'} justifyContent={'space-evenly'} spacing={2} sx={{ with: '100%' }}>
          <Grid item xs={12} md={7}>
            <TextField
              fullWidth
              type="text"
              id="outlined-basic"
              name='name'
              label="Name"
              variant="outlined"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              error={touched.name && errors.name}
              helperText={touched.name && errors.name ? errors.name : ''}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              fullWidth
              type="email"
              id="outlined-basic"
              name='email'
              label="Email"
              variant="outlined"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              error={touched.email && errors.email}
              helperText={touched.email && errors.email ? errors.email : ''}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              fullWidth
              type="text"
              id="outlined-basic"
              name='coment'
              label="Coment"
              variant="outlined"
              onChange={handleChange}
              value={values.coment}
            />
          </Grid>
        </Grid>
        <Button variant="contained" type='submit'>Send</Button>
      </form>
      {mensaje2 && <p style={{ color: 'blue', fontSize: '16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>¡Thank you so much {localStorage.getItem('userName')}, we will contact you at the following email {localStorage.getItem('email')}!</p>}


    </>
  );
};

export default Form;