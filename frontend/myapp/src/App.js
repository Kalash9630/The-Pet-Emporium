import HOME from './HOME';
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Logn from './Logn'
import Signup from './Signup'
import Cart from './Cart'
import Rabout from './Rabout'
import Dog from './Dog';
import Cat from './Cat';
import Spa from './Spa';
import Meal from './Meal';
import Exercis from './Exercis';
import Health from './Health';
import Shop from './Shop';
import Buy from './Buy';
import Buy1 from './Buy1';
import Thank from './Thank';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HOME />}/>
        <Route path="Logn" element={<Logn />} />
        <Route path="Signup" element={<Signup />} />
        <Route path='Cart' element={<Cart />}/>
        <Route path="Rabout" element={<Rabout />} />
        <Route path="Dog" element={<Dog />} />
        <Route path="Cat" element={<Cat />} />
        <Route path="Spa" element={<Spa />} />
        <Route path="Meal" element={<Meal />} />
        <Route path="Exercis" element={<Exercis />} />
        <Route path="Health" element={<Health />} />
        <Route path="Shop/:productname" element={<Shop />} />
        <Route path="Buy" element={<Buy />} />
        <Route path="Buy1" element={<Buy1 />} />
        <Route path="Thank" element={<Thank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;