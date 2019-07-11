import React, {useState, useEffect} from 'react';

const Counter = () => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => setCount(count => count + 1), 200)
    return () => {
      console.log("Unmounting")
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      Count: {count}
    </div>
  );
}

export default Counter;
