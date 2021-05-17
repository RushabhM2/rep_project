import './App.css';
import { useState } from 'react'

import StandardInput from './inputs/StandardInput'
import Test from './inputs/Test'

function App() {
  const initialVisitData = {
    name: '',
    town: '',
    pharmacyName: '',
  }

  const initialOwnProductData = [
    {
      productName: '',
      available: false,
      quantityAvailable: null,
      prescriptionSales: false,
      doctorsPrescribing: [],
      otcSales: false,
    }
  ]

  const initialCompetitorProductData = [
    {
      name: '',
      productPrescriptionMovement: null,
      productOtcMovement: null,
      competitorActivity: [],
      additionalInfo: ''
    }
  ]
  
  const [visitData, setVisitData] = useState(initialVisitData);
  const [ownProductData, setOwnProductData] = useState(initialOwnProductData);
  const [competitorProductData, setCompetitorProductData] = useState(initialCompetitorProductData);
  
  return (
    <div className="App">
      hello world
      <StandardInput />
    </div>
  );
}

export default App;
