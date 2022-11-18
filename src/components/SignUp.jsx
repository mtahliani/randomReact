// TODO:
// 1. email input
// 2. password input
// 3. password reenter input
// 4. submit button
// 5. After pressed submit button. If password match password reenter -> do nothing
// 6. After pressed submit button. If password does not match password reenter -> display the error message "password does not match"

import {useState} from "react";
import {useNavigate} from "react-router-dom";
import NavigateButton from "./buttons/Navigate";
import Inputs from "./inputs/Inputs";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reEnterPassword, setReEntryPass] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleReEnterPassword = (event) => {
        setReEntryPass(event.target.value);
    }

    const handleSubmit = (event) => {
        console.log(email);
        console.log(password);
        console.log(reEnterPassword);
        checkPassMatch();
    }

    const checkPassMatch = () => {
        if (password !== reEnterPassword) {
            console.log("Passwords do not match");
            setPasswordMatch(false);
        }

    }

    const navToSignin = () => {
        navigate("/signin");
    }

    const inputsParams = [["email", handleEmail], ["password", handlePassword], ["re-enter password", handleReEnterPassword]];

    return (
        <div className={"w-1/2 mx-auto mt-60 border-2 flex flex-col border-gray-700 rounded-lg"}>
            <h1 className={"text-center"}>Sign Up</h1>
            <div className={"flex flex-col w-full"}>
                {inputsParams.map(each_item => {
                    return(
                        <Inputs placeHolder={each_item[0]} funcCall={each_item[1]}></Inputs>
                    )
                })}
                <NavigateButton buttonFunction={handleSubmit} buttonText={"submit"}></NavigateButton>
                <NavigateButton buttonFunction={navToSignin} buttonText={"click to signin"}></NavigateButton>

                {passwordMatch ? null : <h1 className={"text-center"}>passwords do not match</h1>}
            </div>
        </div>
    )
}

export default Signup;