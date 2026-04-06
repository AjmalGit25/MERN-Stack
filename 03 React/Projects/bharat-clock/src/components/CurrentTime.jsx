function CurrentTime() {
  let time = new Date().toLocaleDateString();
  let date = new Date().toLocaleTimeString();
  return (
    <div>
      <p className="lead">This is the current timestamp:</p>

      <p className="display-6">Time: {time}</p>
      <p className="display-6">Date: {date}</p>
    </div>
  );
}

export default CurrentTime;