


import './App.css';
import Add from './Components/Add';
import MovieList from './Components/MovieList';
import Trailer from './Components/Trailer';
import { BrowserRouter as Router, Route,  } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Footer from './Components/Footer';


function App() {
  const {moviedata} = useSelector(state => state)
  return (
    <div className="App">
      <Router>
     <Route exact path="/" render={()=><MovieList/>}/>
     <Route exact path="/Info/:id" render={(props)=>  <Trailer {...props} list={moviedata}/>}/>
     
     <Add/>
     <Footer/>
     </Router> 
    </div>
  );
}

export default App;
