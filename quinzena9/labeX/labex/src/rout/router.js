import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Login from '../pages/Login/Login';
import PaginaInscricaoViagem from '../pages/PaginaInscricaoViagem/PaginaInscricaoViagem';
import ListaDeViagens from '../pages/ListaDeViagens/ListaDeViagens';
import CriarViagem from '../pages/CriarViagem/CriarViagem';
import AprovarRejeitarViagens from '../pages/AprovarRejeitarViagens/AprovarRejeitarViagens';
import Header from '../components/Header/Header'

  
    const Router = () => {

        return (

        <BrowserRouter>
                <Header/>            
            <Switch>

                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/login">
                    <Login />
                </Route>

                <Route exact path="/application-form">
                    <PaginaInscricaoViagem />
                </Route>

                <Route exact path="/trips/list">
                    <ListaDeViagens />
                </Route>

                <Route exact path="/trips/create">
                    <CriarViagem />
                </Route>

                <Route exact path="/trips/details">
                    <AprovarRejeitarViagens />
                </Route>


            </Switch>
        </BrowserRouter>

    );
};

    export default Router;