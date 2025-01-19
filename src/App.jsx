import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePageComponent } from './pages/Home';
import { AboutPageComponent } from './pages/About';

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/about" element={<AboutPageComponent />} />     
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
