import './App.css';
import Toolbar from './components/Toolbar';
import TopPage from './components/PageTop';
import MiddlePage from './components/PageMiddle';
import PurpleSide from './components/PurpleSide';
import Comments from './components/Footer';

function App() {

  return (
    <div className="all">
      <Toolbar/>
      <TopPage/>
      <MiddlePage/>
      <PurpleSide/>
      <Comments/>
    </div>
  );
}

export default App;
