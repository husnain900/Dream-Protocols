import ResetPassword from './LoginForm/ResetPassword';
import ForgetPassword from './LoginForm/forgetpswd';
import Otp from './LoginForm/Otp';
import SignIn from './LoginForm/SignIn';
import SignUp from './LoginForm/SignUp';
import Deshboard from './Pages/Deshboard/deshboard';
import RateImages from './Pages/RateImages/RateImages';
import TagImages from './Pages/TagImages/TagImages';
import MyProfile from './Pages/MyProfile/MyProfile';
import SplashScreen from './Ui-Components/DropAnimation';
import Explore from './Pages/Explore/explore';
import Generate from './Pages/Explore/generate';
import GenerateEdit from './Pages/Explore/generateEdit';
import SideBar from './Commons/SideBar/SideBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const PagesRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<SplashScreen />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/ForgetPassword" element={<ForgetPassword />} />
                    <Route path="/otp" element={<Otp />} />
                    <Route path="/ResetPassword" element={<ResetPassword />} />
                    <Route path="/Deshboard" element={<Deshboard />} />
                    <Route path="/RateImages" element={<RateImages />} />
                    <Route path="/TagImages" element={<TagImages />} />
                    <Route path="/MyProfile" element={<MyProfile />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/Generate" element={<Generate />} />
                    <Route path="/GenerateEdit" element={<GenerateEdit />} />
                    <Route path="/SideBar" element={<SideBar />} />
                </Routes>
            </Router>
        </>
    )
}

export default PagesRoutes