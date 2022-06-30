import './App.css';
import Nav from './components/Nav';
import Library from './components/Library';
import Login from './components/Login';
import Characters from './components/Characters';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Library></Library>
      <Login></Login>
      <Characters></Characters>
    </div>
  );
}

export default App;
