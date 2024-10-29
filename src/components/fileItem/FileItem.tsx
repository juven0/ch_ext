import "./FileItem.scss";

import fileIcon from "../../assets/file_icons/gdoc-document-svgrepo-com.svg";
import modeIcon from "../../assets/icons/more-svgrepo-com.svg";

const FileIteme = (): JSX.Element => {
  return (
    <div className="item">
      <div className="icon">
        <img src={fileIcon} alt="" />
      </div>
      <div className="name">
        <label htmlFor="">my image.png</label>
      </div>
      <div className="owner">
        <label htmlFor="">juveno</label>
      </div>
      <div className="date">
        <label htmlFor="">aout 12,2022</label>
      </div>
      <img className="moreInfo" src={modeIcon} alt="" />
    </div>
  );
};

export default FileIteme;
