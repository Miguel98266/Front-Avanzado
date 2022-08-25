import { createContext, useState, useEffect,useContext } from "react";
import canciones from "@/assets/listaCanciones.json";
// CONTEXT tiene que ver con el manejo de estados globales en React
// es decir , poder compatir LA MISMA informacion entre diferentes niveles de
// componentes

// Para usar Context necesitamos seguir una serie de pasos

// Paso 1: Creacion de mi contexto vacio
const SongContext = createContext();

// Paso 2: Creacion del proveedor del Contexto
// Es decir maneja de donde se obtiene y como se pasa la informacion

function SongProvider(props) {
  const [list, setList] = useState([]); //Data de la API
  const [selectedSong, setSelectedSong] = useState({}); // La cancion seleccionada
  const [loading, setLoading] = useState(true); // Nos va a indicar cuando los datos estan disponibles

  const [search,setSearch]=useState('')

  useEffect(() => {
    setTimeout(() => {
      setList(canciones);
      setLoading(false);
    }, 2000);
  }, []);

  //   Tenemos que indicar en el provider que Datos Proveer
  // Estos datos son publicos para todos los componentes
  const value = {
    list,
    selectedSong,
    setSelectedSong,
    loading,
    search,
    setSearch
  };
  return <SongContext.Provider value={value} {...props}></SongContext.Provider>;
}

// Paso 3: Consumidor del contexto
// Brindar acceso a la data global de mi contexto
const useSongContext = () => {
  const context = useContext(SongContext);
  return context;
};
// Paso 4: Exportar las funciones del Provider y el Consumer
export {
    SongProvider,
    useSongContext
}