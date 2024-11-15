import "./FileItem.scss";

import fileIcon from "../../assets/file_icons/gdoc-document-svgrepo-com.svg";
import { useAppDispatch } from "../../redux/hooks";
import { FC } from "react";
import { setActiveFile } from "../../redux/slices/activeFile";

interface ItemProps {
  name: string;
  size: string;
  date: string;
  blockHash: string;
}
const CustomItem: FC<ItemProps> = ({
  name,
  size,
  date,
  blockHash,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const dateFormater = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };


  return (
    <div className="item" onClick={() =>{
        dispatch(setActiveFile(blockHash))}}>
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
        <label htmlFor="">{dateFormater(date)}</label>
      </div>
    </div>
  );
};

export default CustomItem;
