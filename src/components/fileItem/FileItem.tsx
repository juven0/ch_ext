import "./FileItem.scss";

import fileIcon from "../../assets/file_icons/gdoc-document-svgrepo-com.svg";
import modeIcon from "../../assets/icons/more-svgrepo-com.svg";
import { FC } from "react";

interface ItemProps {
  name: string;
  size: string;
  date: string;
  blockHash: string;
}
const FileIteme: FC<ItemProps> = ({
  name,
  size,
  date,
  blockHash,
}): JSX.Element => {
  const downloadFile = async () => {};
  return (
    <div className="item">
      <div className="icon">
        <img src={fileIcon} alt="" />
      </div>
      <div className="name">
        <label htmlFor="">{name}</label>
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
