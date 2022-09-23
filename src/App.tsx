import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName ={
    first: 'Emmanuel',
    last: 'Rapoo'
  }

  const nameList = [
    {
      first: 'Lydia',
      last: 'Stephenc'
    },
    {
      first: 'Oche',
      last: 'Princess'
    },
    {
      first: 'Andy',
      last: 'Manfried'
    },
  ]
  return (
    <div className="App">
      <Greet name='Rapoo' messageCount={20} isLogin={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
