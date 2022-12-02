import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greeting';

export default function Greeting() {
  const greeting = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  return (
    <div>
      <h1>{greeting.message}</h1>
    </div>
  );
}
