import './App.css';
import PrvaKompa from './components/PrvaKompa';
import DrugaKompa from './components/DrugaKompa';
import TrecaKompa from './components/TrecaKompa';
import CetvrtaKompa from './components/CetvrtaKompa';
import PetaKompa from './components/PetaKompa';
import {SestaKompa, SedmaKompa} from './components/OstaleKompe';

function App() {
  return (
   <div className='App'>
    <h1>Algebra</h1>
    <PrvaKompa />
    <DrugaKompa />
    <TrecaKompa />
    <CetvrtaKompa />
    <PetaKompa />
    <SestaKompa />
    <SedmaKompa />
    </div>
  );
}

export default App;
