import {useNavigate} from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
    const handleNaviage = () => {
        navigate("/signin");
    }
    return (
        <button className={"mt-10 ml-20 border-2 border-gray-700 rounded-lg p-4 hover:bg-gray-700 hover:text-white"} onClick={handleNaviage}>Sign In</button>
    )
}

export default Landing;
