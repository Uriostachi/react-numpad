import './App.css';
import { Column, Row, Container } from './Styles/Grid';

import { useSelector, useDispatch } from 'react-redux';
import GlobalStyle from './Styles/Global';

import Displayer from './components/Displayer'
import Numpad from './components/Numpad';

const App = () => {
  return (
   <Container>
     <GlobalStyle/>
       <Displayer></Displayer>
       <Numpad></Numpad>
   </Container>
  );
}

export default App;
