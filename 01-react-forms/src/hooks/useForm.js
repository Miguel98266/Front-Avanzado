//? Reglas para crear un hook
// Custom hook es una funcion que utiliza otros hooks de React
// 1. Siempre dedemos usar la palabra "use" al nombrarlo: useForm
// 2. Siempre deben ser funciones (a partir de React v16 usamos hooks)
// 3. Siempre deben usar algun hook de React (useState,useEffect, useRef,etc)
// 4. Deben de ser reutilizables, no para casos muy especificos.

import { useState, useEffect } from "react";

function useForm(callback, defaults) {
  //Estado unico para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults);

  //Cargar los valores por defecto
  useEffect(() => {
    setInput({ ...defaults });
  }, [defaults]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Equivalente a:
    // const name = event.target.name
    console.log(name, value);
    setInput({ ...input, [name]: value }); //actualizo la data
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Hacemos que no se recargue la pagina
    callback(input);
  };
  return {
    input,
    handleInputChange,
    handleSubmit,
  };
}

export default useForm;
