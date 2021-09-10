import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import SimpleBottomNavigation from "./components/MainNav";
import Recentes from './Pages/Recentes/Recentes';
import Filmes from './Pages/Filmes/Filmes';
import Series from './Pages/Series/Series';
import Pesquisar from './Pages/Pesquisar/Pesquisar';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">   
    <container>
      <switch>
        <Route path='/' component={Recentes} exact />
        <Route path='/filmes' component={Filmes}/>
        <Route path='/series' component={Series}/>
        <Route path='/pesquisar' component={Pesquisar}/>
      </switch>
    </container>
    
     </div>

    <SimpleBottomNavigation />
   
    </BrowserRouter>
  );
}

export default App;
