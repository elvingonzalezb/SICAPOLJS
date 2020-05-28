import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Inicio } from './componentes/Inicio'
import { Funcionario } from './componentes/Funcionario'
import { Navbar } from './componentes/Navbar'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="container p-4">
        <Switch>
          <Route exact stric path="/" component={Inicio} />
          <Route exact stric path="/funcionario" component={Funcionario} />
        </Switch>
      </div>
    </Router>
  );
}

export default App
