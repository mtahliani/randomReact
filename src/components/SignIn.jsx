import {useState} from "react";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, inputPassword] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        inputPassword(event.target.value);

    }
    const handleSubmit = () => {
        console.log(email);
        console.log(password);
    }
    return (
        <div className={"w-1/2 mx-auto mt-60 border-2 flex flex-col border-gray-700 rounded-lg"}>
            <h1 className={"text-center"}>Sign in</h1>
            <div className={"flex flex-col w-full"}>
                <input className={"w-2/3 h-8 border-2 border-gray-700 rounded-lg text-center my-2 mx-auto"} placeholder={"email"} onChange={handleEmail}></input>
                <input className={"w-2/3 h-8 border-2 border-gray-700 rounded-lg text-center my-2 mx-auto"} placeholder={"password"} onChange={handlePassword}></input>
                <button className={"border-2 border-gray-700 w-1/6 mx-auto my-4 hover:bg-gray-700 hover:text-white"} onClick={handleSubmit}>Signup</button>
            </div>
        </div>
    )
}

export default Signin;