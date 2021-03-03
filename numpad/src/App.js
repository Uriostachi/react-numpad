import './App.css';
import { Container } from './Styles/Grid';

import { useSelector } from 'react-redux';
import GlobalStyle from './Styles/Global';

import Nav from './components/Nav';
import Home from './components/Home';
import Score from './components/Score';
import Game from './components/Game';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

const App = () => {

  const { remainingQuestions } = useSelector(state => state);

  return (
   <Router>
     <Container>
       <GlobalStyle/>
         <Nav></Nav>
        <Switch>
          <Route path="/game">
            {remainingQuestions < 1 ? <Redirect to='/score' /> : <Game/>}
          </Route>
          <Route path="/score">
            <Score />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

     </Container>
   </Router>
  );
}

export default App;
