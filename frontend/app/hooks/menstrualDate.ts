import { useState } from 'react';


export default function useMenstrualDate() {
  const [date, setDate] = useState(false);

  return { date, setDate };
}