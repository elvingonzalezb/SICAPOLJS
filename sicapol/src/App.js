import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Nosotros } from './componentes/Nosotros'
import { Funcionario } from './componentes/Funcionario'
import { Navbar } from './componentes/Navbar'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="container p-4">
        <Switch>
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/" component={Funcionario} />
        </Switch>
      </div>
    </Router>
  );
}

export default App
