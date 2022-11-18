import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import LandingPage from "./components/Landing";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard";
import NewDashBoard from "./components/NewDashBoard";

function App() {
  return (
    <div>
        <Routes>
            //this is the root route
            <Route path={"/"} element={<LandingPage />}></Route>

            //route for sign in page
            <Route path={"/signin"} element={<SignIn />}></Route>

            //route for sign up page
            <Route path={"/signup"} element={<SignUp />}></Route>

            //route for DashBoard page
            <Route path= {"/landingpage"} element={<DashBoard />}></Route>

            <Route path= {"/landingpage2"} element={<NewDashBoard/>}></Route>

        </Routes>
    </div>
  )
}

export default App;
