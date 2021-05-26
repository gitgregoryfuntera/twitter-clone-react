import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActionNav from './components/ActionNav/ActionNav';
import Tweet from './contents/Tweet/Tweet';

function App() {
  return (
    <div className="App">
      <Header />
      <Tweet />
      <ActionNav />
    </div>
  );
}

export default App;
