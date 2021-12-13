import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Clock from './components/Clock';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <body>
          <Header />
          <Clock />
          <Main />
        <Switch>
        </Switch>
      </body>
    </BrowserRouter>
  );
}

export default App;
