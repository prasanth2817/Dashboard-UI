import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Help from './Pages/Help'
import LabTest from './Pages/LabTest'
import Appointment from './Pages/Appointment'
import MedicineCheck from './Pages/MedicineCheck'
import Message from './Pages/Message'
import Payment from './Pages/Payment'
import Settings from './Pages/Settings'

function App() {

  return<>

  <div className="Wrapper">
    <BrowserRouter>
    <Sidebar />
    <Routes>
      <Route path='/' element={<Dashboard />}>
     <Route path='Dashboard' element={<Dashboard />}/>
     <Route path='Help' element={<Help/>}/>
     <Route path='Appointment' element={<Appointment />}/>
     <Route path='LabTest' element={<LabTest/>}/>
     <Route path='MedicineCheck' element={<MedicineCheck/>}/>
     <Route path='Message' element={<Message/>}/>
     <Route path='Payment' element={<Payment/>}/>
     <Route path='Settings' element={<Settings/>}/>
     </Route>
     </Routes>
     </BrowserRouter>
     </div>
    </>
}

export default App
