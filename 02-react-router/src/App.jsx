import "./App.css";
import { Routes, Route, Link, useLocation, useParams ,Outlet,useNavigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portafolio">Portafolio</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portafolio" element={<Portafolio />}>
          <Route path=":pid" element={<PortafoliDetalle />} />
        </Route>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <footer>
        <p>Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
function Portafolio() {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to="/portafolio/1">Pinterest</Link>
        </li>
        <li>
          <Link to="/portafolio/2">Cajero</Link>
        </li>
        <li>
          <Link to="/portafolio/3">Pokedex</Link>
        </li>
      </ul>
      {/* Aqui se renderea el contenido anidado */}
      <Outlet/>
    </div>
  );
}
function PortafoliDetalle() {
  const proyectos = [
    {
      id: 1,
      nombre: "Pinterest",
      descripcion: "Un clon e pinterest con HTML y Css",
    },
    {
      id: 2,
      nombre: "Cajero",
      descripcion: "Simular un cajero automatico con HTML, CSS y JS",
    },
    {
      id: 3,
      nombre: "Pokedex",
      descripcion:
        "Consumir la PokéApi y mostrar un listado de Pokemons con HTML,CSS y JS",
    },
  ];
  // useParamns me permite leer los params e mis rutas para tener rutas dinamicas.
  let { pid } = useParams();
  const navigate=useNavigate()
  return (
    <>
      <h3>ID: {proyectos[pid - 1].id} </h3>
      <h3>Nombre: {proyectos[pid - 1].nombre}</h3>
      <p>Descripcion: {proyectos[pid - 1].descripcion}</p>
      <button onClick={()=>{
        navigate('/portafolio')
        // Si quiero ir a la pagina anterior el historial: navigate(-1)
        // Si quiero ir a la pagina siguiente el historial: navigate(1)
      }}>Nos vamos al portafolio</button>
    </>
  );
}
function Contacto() {
  return (
    <div>
      <h1>Contacto</h1>
    </div>
  );
}
function Error404() {
  let location = useLocation();
  return (
    <div>
      <h1>Error 404</h1>
      <p>No encontre: {location.pathname} </p>
      <p>
        <Link to="/">Regresar al Home</Link>
      </p>
    </div>
  );
}
export default App;
