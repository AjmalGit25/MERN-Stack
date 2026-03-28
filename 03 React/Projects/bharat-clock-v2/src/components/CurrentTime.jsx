import { useEffect, useState } from "react";

function CurrentTime() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);

    return () => clearInterval(intervalId); // cleanup
  }, []);


  return (
    <div>
      <p className="lead text-primary">This is the current timestamp: </p>
      <p className="display-6">Date: {date}</p>
      <p className="display-6">Time: {time}</p>
    </div>
  );
}

export default CurrentTime;