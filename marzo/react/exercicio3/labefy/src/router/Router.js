import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CreatePlaylist from '../components/CreatePlaylist/CreatePlaylist';
import Playlist from '../components/Playlists/Playlist';



 const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Playlist/>
        </Route>
        <Route exact path="/criarplaylist">
          <CreatePlaylist/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
 };

 export default Router;