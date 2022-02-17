import NavBar from './components/NavBar';
import Router from './routes/router';
import styled from 'styled-components';

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
function App() {
  return (
    <ContainerPrincipal>
      <NavBar />
      <Router />
    </ContainerPrincipal>
  );
}

export default App;
