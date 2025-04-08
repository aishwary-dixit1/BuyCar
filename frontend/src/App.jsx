import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './components/Body';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import CarDetails from './pages/CarDetails';
import WishlistPage from './pages/WishlistPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body />}>
          <Route index element={<HomePage />} />
          <Route path='/car/:id' element={<CarDetails />} />
          <Route path='/wishlist' element={<WishlistPage /> } />
        </Route>
      </Routes>
      <Toaster position='top-center' />
    </BrowserRouter>
  );
}

export default App;