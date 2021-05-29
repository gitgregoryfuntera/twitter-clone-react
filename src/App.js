import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ActionNav from "./components/ActionNav/ActionNav";
import Tweet from "./contents/Tweet/Tweet";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";


function App() {
  
  return (
    <Provider store={store}>
      <Header />
      <Tweet/>
      <ActionNav />
    </Provider>
  );
}

export default App;
