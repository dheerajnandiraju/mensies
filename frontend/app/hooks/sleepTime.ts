import { useState } from 'react';


export default function useSleepTime(initialTime = ['', '']) {
  const [sleepTime, setSleepTime] = useState(initialTime);

  return { sleepTime, setSleepTime };
}