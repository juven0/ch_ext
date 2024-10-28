import "./login.scss";

import User from "../../assets/icons/user-circle-svgrepo-com.svg";
import Key from "../../assets/icons/key-square-svgrepo-com.svg";
import { useState } from "react";

const Login = (): JSX.Element => {
  const [formType, setFormType] = useState(false);

  return (
    <div className="Login">
      <div className="login-content">
        <div className="head">
          <div className="logo">
            <label htmlFor="">Nebula</label>
          </div>
          <div className="create">
            <label htmlFor="">
              {!formType ? "don't have account ?" : "Already have account?"}
            </label>
            <button onClick={() => setFormType(!formType)}>
              {!formType ? "Create Your Identity" : "Login here"}
            </button>
          </div>
        </div>
        <div className="content">
          {/* login */}
          {!formType ? (
            <div className="log">
              <h3 className="w-mess">Welcome Back</h3>
              <p className="mess">Please enter your details to sign in. </p>
              <div className="form">
                <div className="item">
                  <div className="icon">
                    <img src={User} alt="" />
                  </div>
                  <div className="form-content">
                    <p>Your user ID</p>
                    <input type="text" name="" id="" />
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <img src={Key} alt="" />
                  </div>
                  <div className="form-content">
                    <p>Your Private Key</p>
                    <input type="text" name="" id="" />
                  </div>
                </div>

                <button className="valid">valid my Information</button>
                <label htmlFor="">or</label>
                <button className="log_file">Login With Nebula File</button>
              </div>
            </div>
          ) : (
            <div className="log">
              <h3 className="w-mess">Welcome</h3>
              <p className="mess">Please enter your details to resister in. </p>
              <div className="form">
                <div className="item">
                  <div className="icon">
                    <img src={User} alt="" />
                  </div>
                  <div className="form-content">
                    <p>Your user name</p>
                    <input type="text" name="" id="" />
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <img src={Key} alt="" />
                  </div>
                  <div className="form-content">
                    <p>Your Secret Message</p>
                    <input type="text" name="" id="" />
                  </div>
                </div>

                <button className="valid">valid my Information</button>
                <button className="down_info">Download You Nebula Info</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="rigth-deco"></div>
    </div>
  );
};

export default Login;
