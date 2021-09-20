import React, { useState } from "react";
import "../assets/styles/Login.css";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [LoginPage, setLoginPage] = useState(true);
  const [FullName, setFullName] = useState("");
  const [ProfileURL, setProfileURL] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const SignupHandler = () => {
    if (FullName != "" && Email != "" && Password != "") {
      auth
        .createUserWithEmailAndPassword(Email, Password)
        .then((userAuth) =>
          userAuth.user.updateProfile({
            FullName: FullName,
            ProfileURL: ProfileURL,
          })
        )
        .then(() =>
          dispatch(
            login({
              Email: Email,
              FullName: FullName,
              ProfileURL: ProfileURL,
            })
          )
        )
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="LoginContainer">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
        alt="Linkedin Logo"
      />
      {LoginPage ? (
        <>
          <form>
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
          </form>
          <button>Login</button>
          <p>
            Are you a new user?{" "}
            <span className="register_link" onClick={() => setLoginPage(false)}>
              Register Now
            </span>
          </p>
        </>
      ) : (
        <>
          <form>
            <input
              type="text"
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter Full Name"
            />
            <input
              type="text"
              value={ProfileURL}
              onChange={(e) => setProfileURL(e.target.value)}
              placeholder="Enter Profile Photo URL"
            />
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </form>
          <button onClick={SignupHandler}>Signup</button>
          <p>
            Go back to the{" "}
            <span className="register_link" onClick={() => setLoginPage(true)}>
              Login Page
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;
