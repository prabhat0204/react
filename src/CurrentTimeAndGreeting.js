package json is not required here as per the instructions. Here's the complete implementation of the CurrentTimeAndGreeting.js file:

```javascript
import React, { useState, useEffect } from 'react';
import getCurrentTime from '../utils/getCurrentTime';

const CurrentTimeAndGreeting = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [greetingMessage, setGreetingMessage] = useState('');

  useEffect(() => {
    const updateTime = async () => {
      try {
        const currentHour = await getCurrentTime();
        let message;
        const minutes = new Date().getMinutes();
        const seconds = new Date().getSeconds();

        if (currentHour < 12) {
          message = 'Good morning';
        } else if (currentHour < 18) {
          message = 'Good afternoon';
        } else {
          message = 'Good evening';
        }

        setCurrentTime(`Current time: ${currentHour}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
        setGreetingMessage(message);
      } catch (error) {
        console.error('Error updating current time:', error);
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>{greetingMessage}</h1>
      <p>{currentTime}</p>
    </div>
  );
};

export default CurrentTimeAndGreeting;
```