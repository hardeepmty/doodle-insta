import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import desk from "./desk.jpg";
import DoodleLogo from "./DoodleLogo.png";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const emailValidation = () => {
    const emailRegEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (emailRegEx.test(email)) {
      setIsEmailValid(true);
      setMessage("");
    } else if (!emailRegEx.test(email) && email !== "") {
      setIsEmailValid(false);
      setMessage("Email is Not Valid");
    } else if (email === "") {
      setIsEmailValid(false);
      setMessage("Email is required");
    } else {
      setIsEmailValid(false);
      setMessage("");
    }
  };

  const pwdValidation = () => {
    const passwordRegEx = /^.{8,}$/;
    if (passwordRegEx.test(password)) {
      setIsPasswordValid(true);
      setText("");
    } else if (!passwordRegEx.test(password) && password !== "") {
      setIsPasswordValid(false);
      setText("Password is Not Valid");
    } else if (password === "") {
      setIsPasswordValid(false);
      setText("Password is required");
    } else {
      setIsPasswordValid(false);
      setText("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(false);
  };

  const handleOnChange2 = (f) => {
    setPassword(f.target.value);
    setIsPasswordValid(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submit = () => {
    emailValidation();
    pwdValidation();
    if (isEmailValid && isPasswordValid) {
      setEmail("");
      setPassword("");
      alert("You have successfully logged in");
      navigate('/landing');
    }
  };

  return (
    <div className="bigbody">
      <div className="app">
        <div className="page">
          <div className="card">
            <div className="heading">
              <h1>DOODLE.</h1>
              {/* <img className="logo" src={DoodleLogo} alt="Doodle Logo" /> */}
            </div>
            <div>
              <h4>Create your Account!</h4>
            </div>
            <div>
              <label htmlFor="email">Email:</label><br />
              <input
                type="email"
                id="email"
                placeholder="email"
                value={email}
                onChange={handleOnChange}
              />
              <p className="message">{message}</p>

              <label htmlFor="password">Password:</label><br />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="password"
                value={password}
                onChange={handleOnChange2}
              />
              <IconButton
                onClick={togglePasswordVisibility}
                size="small"
                style={{ marginLeft: '-32px', marginTop: '10px' }}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
              <p className="text">{text}</p>
              <button onClick={submit}>Sign Up</button>
              <p className="alert">Click to see if all the fields are valid.</p>
            </div>
            <p>
              By selecting "Sign Up" again you agree to our <a>Terms</a> and{" "}
              <a>Privacy policy.</a>
            </p>
          </div>
          {/* <img className="desk" src={desk} alt="Desk" /> */}
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
