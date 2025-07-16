import React from 'react';
import { getTimeBasedGreeting } from '../timeUtils';

const Greeting = () => {
  const greetingMessage = getTimeBasedGreeting(new Date().getHours());
  return <p>{greetingMessage}</p>;
};

export default Greeting;