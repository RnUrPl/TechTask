import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { OfferPage } from '../../pages/OfferPage';
import { SavedPage } from '../../pages/SavedPage';
import {Navbar} from '../Navbar';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/favourites" element={ <SavedPage /> } />
        <Route path = '/:id'element ={<OfferPage />}/>
      </Routes>
    </div>
  );
}

export default App;
