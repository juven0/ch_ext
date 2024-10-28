import "./login.scss";

import User from "../../assets/icons/user-circle-svgrepo-com.svg";
import Key from "../../assets/icons/key-square-svgrepo-com.svg";

const Login = (): JSX.Element => {
  return (
    <div className="Login">
      <div className="login-content">
        <div className="head">
          <div className="logo">
            <label htmlFor="">Nebula</label>
          </div>
          <div className="create">
            <label htmlFor="">don't have account ?</label>
            <button>Create Your Identity</button>
          </div>
        </div>
        <div className="content">
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
                <p>Your user ID</p>
                <input type="text" name="" id="" />
              </div>
            </div>

            <button className="valid">valid my Information</button>
          </div>
        </div>
      </div>
      <div className="rigth-deco"></div>
    </div>
  );
};

export default Login;
