import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Form, 
  Simulacao 
} from '../pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/simulacao" element={<Simulacao/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router