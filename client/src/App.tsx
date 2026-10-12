import { Route, Routes } from "react-router-dom";

import SignIn from "./Auth/SignIn";
import ForgotPassword from "./Auth/ForgotPassword";
import SignUp from "./Auth/SignUp";
import Profile from "./Auth/Profile";

import Layout from "./Layout/Layout";
import Dashboard from "./Components/Dashboard/Dashboard";
import Teams from "./Components/Dashboard/Teams";
import Channels from "./Components/Dashboard/Channels";
import Contacts from "./Components/Dashboard/Contacts";
import Messages from "./Components/Dashboard/Messages";

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-pass" element={<ForgotPassword />} />
      <Route path="/profile" element={<Profile />} />

      {/* Dashboard */}
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/channels" element={<Channels/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/messages" element={<Messages/>}/>
      </Route>
    </Routes>
  );
}

export default App;