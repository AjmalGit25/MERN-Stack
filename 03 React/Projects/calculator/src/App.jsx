import './App.css';
import Display from './components/Display.jsx';
import ButtonContainer from './components/ButtonContainer.jsx';
import AppName from './components/AppName.jsx';

function App() {
  return (
    <>
      <AppName />
      <div id="calculator">
        <Display />
        <ButtonContainer />
      </div>
    </>
  );
}

export default App;