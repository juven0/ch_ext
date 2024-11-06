import LeftNavs from "../leftNavs/leftNavs";
import Logo from "../logo/logo";
import Upload from "../../assets/icons/download-svgrepo-com.svg";
import LogOut from "../../assets/icons/logout-2-svgrepo-com.svg";

import "./leftSide.scss";
import { useState } from "react";
import axios from "axios";
import { useAppSelector } from "../../redux/hooks";

const LeftSide = (): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    console.log("submit ");
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", user.userId);
    await axios
      .post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      })
      .then((res) => {
        // axios
        // .get(`http://localhost:3000/user/files/${user.userId}`)
        // .then((res) => {
        //   dispatch(addFile(res.data));
        //   setFiles(res.data);
        //   setIsLoad(false);
        // });
      });
  };

  return (
    <div className="left-side">
      <Logo />
      <LeftNavs />
      <div className="upload">
        <label htmlFor="file">
          <img src={Upload} alt="" />

          <input
            type="file"
            onChange={(e) => handleFileChange(e)}
            name="file"
            id="file"
          />
        </label>
      </div>
      <div className="file_upload">
        <button
          type="button"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Upload
        </button>
        <div className="progress-bar-container">
          {/* <div class="progress-bar" style="width: 50%;"></div> */}
        </div>
        <h3>{uploadProgress}</h3>
      </div>

      <div className="logout">
        <img src={LogOut} alt="" />
        <label htmlFor="">Log Out</label>
      </div>
    </div>
  );
};

export default LeftSide;
