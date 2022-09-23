import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name='Rapoo' messageCount={20} isLogin={true} />
    </div>
  );
}

export default App;
