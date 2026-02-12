import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Components/Home.jsx';
function App() {
  return( 
     <Provider store={store}>
      <BrowserRouter>
      <Home/>
      </BrowserRouter>
      </Provider>
    
  )
}

export default App
