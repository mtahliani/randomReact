import {useState} from "react";
import {useNavigate} from "react-router-dom";
import NavigateButton from "./buttons/Navigate";
import Inputs from "./inputs/Inputs";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, inputPassword] = useState("");
    const [validPassword, setValidPassword] = useState(true);
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        inputPassword(event.target.value);

    }
    const handleSubmit = () => {
        console.log(email);
        console.log(password);
        if (!password.includes("!")) {
            setValidPassword(false);
        }
        else {
            navToLandingPage();
        }
    }

    const navToLandingPage = () => {
        navigate("/LandingPage");
    }

    const navToSignup = () => {
        navigate("/signup");
    }

    const inputParams = [["email", handleEmail], ["password", handlePassword]];
    return (
        <div className={"w-1/2 mx-auto mt-60 border-2 flex flex-col border-gray-700 rounded-lg"}>
            <h1 className={"text-center"}>Sign in</h1>
            <div className={"flex flex-col w-full"}>

                {inputParams.map((each_item) => {
                    return (
                        <Inputs placeHolder = {each_item[0]} funcCall = {each_item[1]}></Inputs>
                    )
                })

                }
                <NavigateButton buttonFunction = {handleSubmit} buttonText = {"Submit"}></NavigateButton>
                <hr className={"border-2 border-black"}></hr>

                <NavigateButton buttonFunction = {navToSignup} buttonText = {"Click here to signup"}></NavigateButton>



                {validPassword ? null : <h1 className={"text-center"}>Password invalid</h1>}
            </div>
        </div>
    )
}

export default Signin;