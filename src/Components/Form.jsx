import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones


  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState(false)
  const [mensaje2, setMensaje2] = useState(false)


  const hundleSubmit = (e)=>{
    e.preventDefault()
  }

  const handelUserName = (e)=>{
    setUserName(e.target.value) 
   
  }

  const hundleEmail = (e)=>{
    setEmail(e.target.value)
  }

  const form = document.getElementById('form')

  const validation = ()=>{
    if(userName.length < 5){
      setMensaje(true)
      setMensaje2(false)
    
    }else{
      localStorage.setItem('userName', userName)
      localStorage.setItem('email', email )
      console.log(userName);
      console.log(email);
      setUserName('')
      setEmail('')
      form.reset()
      setMensaje(false)
      setMensaje2(true)
    }

  }


  return (
    <>
      <form id='form' onSubmit={hundleSubmit}>
        <label>Nombre Completo</label>
        <input type="text" value={userName} placeholder="Full Name" onChange={handelUserName}/>
        <label> Email</label>
        <input type="email" value={email} placeholder="Email" onChange={hundleEmail}/>
        <button type="submit" onClick={validation}> Enviar </button>

      </form>    

    {mensaje && <p>El nombre debe contener como minimo 5 caracteres</p>}
    {mensaje2 && <p>Muchas gracias {localStorage.getItem('userName', userName)}, nos contactaremos contigo al siguiente email: {localStorage.getItem('email', email)} </p>}

    </>
  );
};

export default Form;
