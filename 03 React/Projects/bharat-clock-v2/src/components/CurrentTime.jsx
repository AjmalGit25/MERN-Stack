import { useEffect, useState } from "react";

function CurrentTime() {

  const [time, setTime] = useState(new Date().toLocaleDateString());
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleDateString());
      setDate(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Cleaning up UseEffect.");
    };
  }, [])


  return (
    <div>
      <p className="lead">This is the current timestamp: </p>
      <p className="display-6">Time: {time}</p>
      <p className="display-6">Date: {date}</p>
    </div>
  );
}

export default CurrentTime;