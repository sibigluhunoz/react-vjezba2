import './App.css';
import PrvaKompa from './components/PrvaKompa';
import DrugaKompa from './components/DrugaKompa';
import TrecaKompa from './components/TrecaKompa';
import CetvrtaKompa from './components/CetvrtaKompa';
import PetaKompa from './components/PetaKompa';
import {SestaKompa, SedmaKompa} from './components/OstaleKompe';

// može i import * as OstaleKompe from './components/OstaleKompe';
//u tom slučaju u funkciju pišemo <OstaleKompe.SestaKompa />
// <OstaleKompe.SedmaKompa />


function App() {
  const jasnoSvima = true;
  const podnaslov = jasnoSvima ? <h2>svima je jasno</h2> : <h2>nikome nije jasno</h2>;

  const pozdravniFooter = jasnoSvima && <h2>pozdrav!!</h2>;
  
  return (
   <div className='App'>
    <h1>Algebra</h1>
    {podnaslov}
    <PrvaKompa />
    <DrugaKompa />
    <TrecaKompa />
    <CetvrtaKompa />
    <PetaKompa />
    <SestaKompa />
    <SedmaKompa />
    {pozdravniFooter}
    </div>
  );
}

export default App;
