import {Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Footer from './components/pages/Footer'
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/> }/>
    </Routes>

    <Footer/>
    </div>
  );
}

export default App;
