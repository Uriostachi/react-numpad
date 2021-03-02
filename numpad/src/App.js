import './App.css';
import { Column, Row, Container } from './Styles/Grid';

import { useSelector, useDispatch } from 'react-redux';
import GlobalStyle from './Styles/Global';

import Displayer from './components/Displayer'
import Numpad from './components/Numpad';
import Counter from './components/Counter';

const App = () => {

  const { remainingQuestions } = useSelector(state => state);

  return (
   <Container>
     <GlobalStyle/>
       <Displayer></Displayer>
       { remainingQuestions > 0 && (<Numpad></Numpad>) }
       <Counter></Counter>
   </Container>
  );
}

export default App;
