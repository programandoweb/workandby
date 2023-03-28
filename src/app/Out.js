import React from "react";
import Header from "./base/header";
import Footer from "./base/footer";
import Home from "./home";
import QuienesSomos from "./quienes_somos";
import Servicios from "./servicios";
import Sedes from "./sedes";
import Preguntas from "./preguntas";
import Contactenos from "./contactenos";
import Noticias from "./noticias";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App=(props)=>{


  return  <>
            <Header/>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/nosotros">
                  <QuienesSomos/>
                </Route>
                <Route path="/beneficios">
                  <Servicios/>
                </Route>
                <Route path="/sedes">
                  <Sedes/>
                </Route>
                <Route path="/noticias">
                  <Noticias/>
                </Route>
                <Route path="/preguntas">
                  <Preguntas/>
                </Route>
                <Route path="/contactenos">
                  <Contactenos/>
                </Route>
              </Switch>
            </Router>
            <Footer/>
          </>
}

export default App;