import { useSelector, useDispatch } from 'react-redux';
import { Column, Row } from '../Styles/Grid';
import Button from '../Styles/Button';
import { updateAnser } from '../actions/actions-types';

const Numpad = () => {

  const { answer } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleClick = val => {
    dispatch(updateAnser(val));
    console.log(answer);
  }

  return (
    <>
      <p>{answer}</p>
      <Row>
        <Button onClick={() => handleClick(1)} primary>1</Button>
        <Button onClick={() => handleClick(2)} primary>2</Button>
        <Button onClick={() => handleClick(3)} primary>3</Button>
      </Row>
      <Row>
        <Button onClick={() => handleClick(4)} primary>4</Button>
        <Button onClick={() => handleClick(5)} primary>5</Button>
        <Button onClick={() => handleClick(6)} primary>6</Button>
      </Row>
      <Row>
        <Button onClick={() => handleClick(7)} primary>7</Button>
        <Button onClick={() => handleClick(8)} primary>8</Button>
        <Button onClick={() => handleClick(9)} primary>9</Button>
      </Row>
      <Row>
        <Button secondary>Reset</Button>
        <Button onClick={() => handleClick(0)} primary>0</Button>
        <Button secondary>Submit</Button>
      </Row>
    </>
  )
}

export default Numpad;