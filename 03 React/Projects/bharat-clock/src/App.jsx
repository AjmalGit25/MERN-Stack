import AppName from './components/AppName.jsx'
import ClockSlogan from './components/ClockSlogan.jsx'
import CurrentTime from './components/CurrentTime.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <center>
      <AppName />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
