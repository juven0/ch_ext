import "./login.scss";

import User from "../../assets/icons/user-circle-svgrepo-com.svg";
import Key from "../../assets/icons/key-square-svgrepo-com.svg";
import { useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = (): JSX.Element => {
  const [formType, setFormType] = useState(false);
  const [userName, setUserName] = useState("");
  const [userSecret, setUserSecret] = useState("");
  const [errorMessge, setErrorMessage] = useState("");
  const [nebulaData, setNebulaData] = useState(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const register = async () => {
    await axios
      .post("http://localhost:3000/user/create", {
        username: userName,
        secretmessage: userSecret,
      })
      .then((res: any) => {
        setNebulaData(res.data.user);
        dispatch(setUser(res.data.user));
      })
      .catch((err) => {
        setErrorMessage("can't create user, please retry !");
      });
  };

  const handleDownload = (data: any) => {
    const content = JSON.stringify(data, null, 2);
    const blob = new Blob([content], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Nebula" + "_" + data.username + "_" + data.userId + ".nb";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const cleanPrivateKey = (key: string): string => {
    return key
      .replace(/-----BEGIN PRIVATE KEY-----/g, "") // Retirer le début
      .replace(/-----END PRIVATE KEY-----/g, "") // Retirer la fin
      .replace(/\n/g, "") // Retirer les sauts de ligne
      .trim(); // Enlever les espaces en début/fin
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.name.endsWith(".nb")) {
      setErrorMessage("Veuillez sélectionner un fichier .nb");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const content = JSON.parse(e.target.result);

        if (
          !content.userId ||
          !content.username ||
          !content.publicKey ||
          !content.privateKey
        ) {
          throw new Error("Format de fichier invalide");
        }

        await axios
          .post("http://localhost:3000/user/login", {
            userid: content?.userId,
            privatekey: content?.privateKey,
          })
          .then((res: any) => {
            const userData = {
              ...res.data.user,
              privateKey: content?.privateKey,
            };
            dispatch(setUser(userData));
            navigate("/home");
          })
          .catch((err) => {
            setErrorMessage("can't connect user, please retry !");
          });
        setErrorMessage("");
      } catch (err: any) {
        setErrorMessage(
          "Erreur lors de la lecture du fichier : " + err.message
        );
      }
    };
    reader.onerror = () => {
      setErrorMessage("Erreur lors de la lecture du fichier");
    };
    reader.readAsText(file);
    console.log(nebulaData);
  };

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
                <input
                  type="file"
                  accept=".nb"
                  onChange={(e) => handleFileUpload(e)}
                  className="hidden"
                  id="uploadNB"
                />
                <label className="log_file" htmlFor="uploadNB">
                  Login With Nebula File
                </label>
              </div>
              <p>{errorMessge}</p>
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
                    <input
                      onChange={(e: any) => setUserName(e.target.value)}
                      type="text"
                      name=""
                      id=""
                      value={userName}
                    />
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <img src={Key} alt="" />
                  </div>
                  <div className="form-content">
                    <p>Your Secret Message</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      onChange={(e) => setUserSecret(e.target.value)}
                      value={userSecret}
                    />
                  </div>
                </div>

                <button
                  className="valid"
                  onClick={() => {
                    register();
                  }}
                >
                  valid my Information
                </button>
                <button
                  className="down_info"
                  onClick={() => {
                    handleDownload(nebulaData);
                  }}
                >
                  Download You Nebula Info
                </button>
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
