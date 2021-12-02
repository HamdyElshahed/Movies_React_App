import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login/login';
import Register from './components/register/register';
import NavBar from './components/navbar/navbar';
import Movies from './components/movies/movies';
import MoviesDetails from './components/moviesdetails/moviesdetails';
import Search from './components/search/search';
import Favorite from './components/favorite/favorite';
import { LangProvider }  from './context/langcontext'
import { useState } from 'react';
import PrivateRoute from './routes/routes';

function App() {
  const [lang , setlang ] = useState("eng")
  return (
    <div className={lang==='ar'?'text-right':'text-left'} dir={lang==='ar'? 'rtl': 'ltr'}>
      <Router>
        <LangProvider value={{lang , setlang}} >
        <NavBar />
       <Switch>
          <Route exact path="/"> <Movies/> </Route>
          <Route exact path="/login"> <Login/> </Route>
          <Route exact path="/register"> <Register/> </Route>
          <Route exact path="/movies"> <Movies/> </Route>
          <Route exact path="/moviedetails/:id"> <MoviesDetails/> </Route>
          <Route exact path="/search"> <Search/> </Route>
          <PrivateRoute exact path="/favorite" Component={Favorite} /> 
       </Switch>
       </LangProvider >
      </Router>
    </div>
  );
}

export default App;
