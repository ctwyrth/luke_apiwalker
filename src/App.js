import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import People from './components/People';
import Planets from './components/Planets';
import Ships from './components/Ships';
import Results from './components/Results';

const Home = () => {
  return ( <div className="container text-center text-warning mt-4"><h1 className="display-6">welcome to the site</h1></div> )
}

const BadLink = () => ( <div className="container text-center text-danger mt-4"><h1 className="display-6">the ROUTE you attempted to travel was blocked by an unknown celestial event</h1></div> )

function App() {
  return (
    <div className="container-fluid">
      <div className="container" style={{height: 100+'vh'}}>
        <Routes>
          <Route path='/' element={ <Navigation />}>
            <Route index element={ <Home /> } />
            <Route path='people' element={ <People />} />
            <Route path='planets' element={ <Planets />} />
            <Route path='ships' element={ <Ships />} />
            <Route path='people/:byId' element={ <People />} />
            <Route path='planets/:byId' element={ <Planets />} />
            <Route path='starships/:byId' element={ <Ships />} />
            <Route path='*' element={ <BadLink />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
