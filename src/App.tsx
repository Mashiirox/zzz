import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  const Ar = [1, 2, 3];
  for (const a in Ar) {
    console.log(a);
  }
  if (Ar.length === 3) {
    console.log(1);
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
