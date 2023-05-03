import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "paginas/Inicio";
import SobreMim from "paginas/SobreMim";
import Menu from "componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

/*console.log(window.location)

COM JAVASCRIPT VANILLA
const pagina = window.location.pathname === '/' ? <div>Olá Mundo! </div> : <div>Sobre Mim...</div>


function App() {
  return (
    <h1>Olá Mundo!</h1>
  );
}
 COM OS COMPONENTES DO REACT
const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />
 tem que retornar pagina na funcão app
*/
function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path='/' element={ <PaginaPadrao /> }>
          <Route index element={ <Inicio /> } />
          <Route path="sobremim" element={< SobreMim /> } />
        </Route>

        <Route path="posts/:id" element={< Post />}/>
        <Route path="*" element={ < NaoEncontrada /> } />
      </Routes>
      
      <Rodape />
    </BrowserRouter>
  )
  

}

export default AppRoutes;
