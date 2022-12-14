import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import LoggedIn from './components/state/LoggedIn';
import Status from './components/Status';

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
      <Greet name='Rapoo' isLogin={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Tansian University</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log('Clicked', event, id)
      }} />
      <Input value='' handleChange={(event) => {
        console.log(event);
      }} />
      <Container styles={{border: '1px solid black', padding: '1rem'}} />

      <LoggedIn />
    </div>
  );
}

export default App;
