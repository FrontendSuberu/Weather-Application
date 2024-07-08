import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import Weather from '../src/Pages/Weather/Weather'

function App() {

  return (
    <>
   {/* browserrouter */}
   <BrowserRouter>

{/* desendant of browser router */}
<Routes>
{/* routes */}
    <Route path='/' element={<Home />} />
    <Route path='/weatherWhiz-Weather' element={<Weather />} />
{/* routes */}

</Routes>
{/* desendant of browser router */}

</BrowserRouter>
{/* browserrouter */}
    </>
  )
}

export default App;
