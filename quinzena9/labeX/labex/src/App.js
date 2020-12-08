import './App.css';
import AprovarRejeitarViagens from './components/PartePrivada/AprovarRejeitarViagens/AprovarRejeitarViagens';
import CriarViagem from './components/PartePrivada/CriarViagem/CriarViagem';
import ListaDeViagens from './components/PartePrivada/ListaDeViagens/ListaDeViagens';
import HomePage from './components/PartePublica/HomePage/HomePage';
import Login from './components/PartePublica/Login/Login';
import PaginaInscricoesViagem from './components/PartePublica/PaginaInscricaoViagens/PaginaInscricaoViagem';
import Router from './components/Router/Router';

function App() {
  return (
    <div>
     <AprovarRejeitarViagens/>
     <CriarViagem/>
     <ListaDeViagens/>
     <HomePage/>
     <Login/>
     <PaginaInscricoesViagem/>
     <Router/>
    </div>
  );
}

export default App;
