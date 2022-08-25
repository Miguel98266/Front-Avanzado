import { useState, useEffect } from "react";
import logo from "../assets/react.svg";
import useForm from "../hooks/useForm";

const FormHook = () => {
  /* Paso 1: Crear un UNICO estao con toda la informacion en forma de objeto*/
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    edad: 0,
    genero: "",
    email: "",
    password: "",
  });
  const sendData=(data)=>{
    console.log(data);
  }
  // Paso 4. Uso mi custom hook de useForm
  const {input,handleInputChange,handleSubmit} = useForm(sendData,datos)

  /* Paso 2. Voy a simular traer data de una API y prerellenar el formulario */
  useEffect(() => {
    setTimeout(() => {
      const info = {
        //JSON que manda el Backend
        nombre: "Miguel",
        apellido: "Calixto",
        edad: 24,
        genero: "M",
        email: "miguel@mail.com",
        password: "123456",
      };
      setDatos(info);
    }, 2000);
  }, []);
  /* Paso 3: Crear mi formulario */
  return (
    <div className="login">
      <div className="login-container">
        <img
          src={logo}
          alt="logo"
          className="logo"
          width="200px"
          height="200px"
        />
        <form>
          {/* Paso 3: Guardo cada cambio del input en su state correspondiente */}
          <label htmlFor="email">Nombre </label>
          <input
            type="text"
            name="nombre"
            placeholder="Miguel"
            onChange={handleInputChange}
            value={input.nombre}
          />
          <label htmlFor="apellio">Apellido </label>
          <input
            type="text"
            name="apellio"
            placeholder="Tu apellio"
            onChange={handleInputChange}
            value={input.apellido}
          />
          <label htmlFor="apellio">Edad </label>
          <input
            type="number"
            name="edad"
            placeholder="Tu eda"
            onChange={handleInputChange}
            value={input.edad}
          />
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            placeholder="correo@mail.com"
            onChange={handleInputChange}
            value={input.email}
          />
          <label htmlFor="email">Genero </label>
          <select name="genero" onChange={handleInputChange} value={input.genero}>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            placeholder="******"
            onChange={handleInputChange}
            value={input.password}
          />
          <button onClick={handleSubmit}>Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

export default FormHook;
