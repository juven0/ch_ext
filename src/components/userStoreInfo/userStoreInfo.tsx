import "./userStoreInfo.scss";
import pictureIcon from "../../assets/icons/album-svgrepo-com.svg";
import fileIcon from "../../assets/icons/file-text-svgrepo-com.svg";
import MediaIcon from "../../assets/icons/clapperboard-play-svgrepo-com.svg";

const UserStoreInfo = (): JSX.Element => {
  return (
    <div className="user-store-info">
      <div className="store-info-card">
        <img src={pictureIcon} alt="" />
        <div className="card-storage">
          <label htmlFor="">Images</label>
          <label htmlFor="">0.1Go</label>
        </div>
        <div className="storage">
          <label htmlFor="" className="file-number">
            3 Files
          </label>
          <input type="range" name="" id="" />
          <div className="capac">
            <label htmlFor="">100Mo</label>
            <label htmlFor="">10Go</label>
          </div>
        </div>
      </div>
      <div className="store-info-card">
        <img src={fileIcon} alt="" />
      </div>
      <div className="store-info-card">
        <img src={MediaIcon} alt="" />
      </div>
    </div>
  );
};

export default UserStoreInfo;
