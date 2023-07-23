import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
// import { auth } from "../Auth/firebase";
function Login() {
  //   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Event handler for sign-in button click
  const signIn = (event) => {
    event.preventDefault();
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     navigate("/");
    //   })
    //   .catch((error) => alert(error.message));
  };
  const register = (event) => {
    event.preventDefault();
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     if (auth) {
    //       navigate("/");
    //     }
    //   })
    //   .catch((error) => alert(error.message));
  };

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  // Event handler for password input change
  const onPasswardChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={classes.login}>
      <Link to="/">
        <img
          className={classes.login__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="LogIn"
        />
      </Link>

      <div className={classes.login__container}>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={onEmailChangeHandler} />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={onPasswardChangeHandler}
          />

          <button
            type="submit"
            className={classes.login__signInButton}
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className={classes.login__registerButton} onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
