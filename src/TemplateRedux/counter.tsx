import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../redux/counterSlice';



const Counter = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementBy = (amount: number) => {
    dispatch(incrementByAmount(amount));
  };

  return (
      <div className='text-red-500'>
        {count}
        <Button className="primary-button" onClick={handleIncrement}>Increment</Button>
        <Button className="primary-button" onClick={handleDecrement}>Decrement</Button>
        <Button className="primary-button" onClick={() => handleIncrementBy(50)}>Increment by 50</Button>
      </div>
  );
};

export default Counter;
