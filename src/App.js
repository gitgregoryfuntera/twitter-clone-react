import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActionNav from './components/ActionNav/ActionNav';
import TweetList from './components/TweetList/TweetList';
import CreateTweetWidget from './components/CreateTweetWidget/CreateTweetWidget';

function App() {
  return (
    <div className="App">
      <Header />
      <TweetList />
      <ActionNav />
    </div>
  );
}

export default App;
