
import { Route, Routes } from 'react-router-dom'
import SignIn from './Auth/SignIn'
import ForgotPassword from './Auth/ForgotPassword'
import SignUp from './Auth/SignUp'
import Profile from './Auth/Profile'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/forgot-pass' element={<ForgotPassword/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes> 
    </div>
  ) 
}

export default App