import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import "./assets/styles/styles.css";
import Create from "./components/Create.tsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import BlogDetails from "./components/BlogDetails.tsx";

function App() {
  // const location = useLocation(); // Muda o estado de acordo com a localidade do url
  // Nao da pra usar aqui pq tem que ser usado em um contexto de Router
  return (
    <>
      <Router>
        <AnimatedRoutes></AnimatedRoutes>
      </Router>
    </>
  );
}

// foi preciso dar wrap nos components em outro pra dar certo
function AnimatedRoutes() {
  const location = useLocation(); // Muda o estado de acordo com a localidade do url

  return (
    <>
      <Header></Header>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home></Home>} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs/:id" element={<BlogDetails></BlogDetails>} />
      </Routes>
    </>
  );
}
export default App;
