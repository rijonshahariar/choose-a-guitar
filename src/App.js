import logo from './logo.svg';
import './App.css';
import Shop from './Component/Shop/Shop';

import Header from './Component/Header/Header';
import Questions from './Component/Questions/Questions';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
<Questions></Questions>
    </div>
  );
}

export default App;
