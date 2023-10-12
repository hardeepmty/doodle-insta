import { BrowserRouter , Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUpForm from "./SignUpForm";
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/landing" element={<LandingPage/>}></Route>
        <Route exact path="/" element={<SignUpForm/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
