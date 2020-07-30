import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Home from './pages/Home/Home';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';

const Pagina404 = () => (<div>Página 404</div>);
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
     <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={Pagina404} exact />
     </Switch>
     
  </BrowserRouter>,

  document.getElementById('root')
);
