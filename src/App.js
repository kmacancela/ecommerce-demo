import Container from 'react-bootstrap/Container';
import './App.css';

import { Switch, Route } from "react-router-dom";
import Home from './components/Home';

const App = () => {
  return(
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Container>
  );
}

export default App;
