import "./userStoreInfo.scss";
import pictureIcon from "../../assets/icons/album-svgrepo-com.svg";
import fileIcon from "../../assets/icons/file-text-svgrepo-com.svg";
import MediaIcon from "../../assets/icons/clapperboard-play-svgrepo-com.svg";
import { FC, useEffect, useState } from "react";
import {
  FILE,
  FileFilter,
  getExtension,
  IMAGE,
  MEDIA,
} from "../../utiles/filesParser";
import { useAppSelector } from "../../redux/hooks";

interface UserStoreInfoProps {
  files: [];
}
const UserStoreInfo = (): JSX.Element => {
  const [imagesCount, setImageCount] = useState(0);
  const [mediaCount, setMediaCount] = useState(0);
  const [fileCount, setFileCount] = useState(0);
  const [file, setFile] = useState();
  const userfiles = useAppSelector((state) => state.files);
  useEffect(() => {
    setFile(userfiles.files);
  }, []);

  useEffect(() => {
    if (file !== undefined && file !== null) {
      file.map((el) => {
        const ext = getExtension(el.fileName);
        const fileType = FileFilter(ext);
        console.log(fileType);
        if (fileType === IMAGE) {
          setImageCount(imagesCount + 1);
          console.log(IMAGE);
        }
        if (fileType === MEDIA) {
          setMediaCount(mediaCount + 1);
        }
        if (fileType === FILE) {
          setFileCount(fileCount + 1);
        }
      });
    }
  }, []);

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
            {imagesCount} Files
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
        <div className="card-storage">
          <label htmlFor="">Files</label>
          <label htmlFor="">0.1Go</label>
        </div>
        <div className="storage">
          <label htmlFor="" className="file-number">
            {fileCount} Files
          </label>
          <input type="range" name="" id="" />
          <div className="capac">
            <label htmlFor="">100Mo</label>
            <label htmlFor="">10Go</label>
          </div>
        </div>
      </div>
      <div className="store-info-card">
        <img src={MediaIcon} alt="" />
        <div className="card-storage">
          <label htmlFor="">Medias</label>
          <label htmlFor="">0.1Go</label>
        </div>
        <div className="storage">
          <label htmlFor="" className="file-number">
            {mediaCount} Files
          </label>
          <input type="range" name="" id="" />
          <div className="capac">
            <label htmlFor="">100Mo</label>
            <label htmlFor="">10Go</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStoreInfo;
