import { useSelector, useDispatch } from 'react-redux';
import { Column, Row } from '../Styles/Grid';
import Button from '../Styles/Button';
import { updateAnser, resetAnser, submit } from '../actions/actions-types';

const Numpad = () => {

  const { answer } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleUpdate = val => {
    dispatch(updateAnser(val));
    console.log(answer);
  }

  const handleReset = () => {
    dispatch(resetAnser())
  }

  const handleSubmit = () => {
    dispatch(submit())
  }

  return (
    <>
      <p>{answer}</p>
      <Row>
        <Button onClick={() => handleUpdate(1)} primary>1</Button>
        <Button onClick={() => handleUpdate(2)} primary>2</Button>
        <Button onClick={() => handleUpdate(3)} primary>3</Button>
      </Row>
      <Row>
        <Button onClick={() => handleUpdate(4)} primary>4</Button>
        <Button onClick={() => handleUpdate(5)} primary>5</Button>
        <Button onClick={() => handleUpdate(6)} primary>6</Button>
      </Row>
      <Row>
        <Button onClick={() => handleUpdate(7)} primary>7</Button>
        <Button onClick={() => handleUpdate(8)} primary>8</Button>
        <Button onClick={() => handleUpdate(9)} primary>9</Button>
      </Row>
      <Row>
        <Button onClick={() => handleReset()} secondary>Reset</Button>
        <Button onClick={() => handleUpdate(0)} primary>0</Button>
        <Button onClick={() => handleSubmit()} secondary>Submit</Button>
      </Row>
    </>
  )
}

export default Numpad;