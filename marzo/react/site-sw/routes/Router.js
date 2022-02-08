import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterDetailPage from "../src/components/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "../src/components/CharacterListPage/CharacterListPage";


const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characterdetail" element={CharacterListPage} />
        <Route path="/characterlist" element={CharacterDetailPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;