import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';

function App() {
  const personName ={
    first: 'Emmanuel',
    last: 'Rapoo'
  }
  return (
    <div className="App">
      <Greet name='Rapoo' messageCount={20} isLogin={true} />
      <Person name={personName} />
    </div>
  );
}

export default App;
