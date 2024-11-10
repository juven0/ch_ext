import "./FileItem.scss";

import fileIcon from "../../assets/file_icons/gdoc-document-svgrepo-com.svg";
import shareIcon from "../../assets/icons/share-svgrepo-com.svg";
import downloadIcon from "../../assets/icons/download-minimalistic-svgrepo-com.svg";
import { useAppDispatch } from "../../redux/hooks";
import { FC } from "react";
import { setActiveFile } from "../../redux/slices/activeFile";
import { setshareForm } from "../../redux/slices/shareForm";
import axios from "axios";

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
  const dispatch = useAppDispatch();
  const dateFormater = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const handleDownload = async (hash) => {
    try {
      // Faire la requête avec axios
      const response = await axios.post(
        `http://localhost:3000/api/download/${hash}`,
        {
          responseType: "blob",
          publicKey: "",
          privateKey: "",
        }
      );

      // Créer une URL pour le blob
      const blobUrl = window.URL.createObjectURL(new Blob([response.data]));

      // Créer un élément <a> temporaire
      const link = document.createElement("a");
      link.href = blobUrl;
      link.setAttribute("download", hash);

      // Ajouter à la page et déclencher le clic
      document.body.appendChild(link);
      link.click();

      // Nettoyer
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Erreur lors du téléchargement:", error);
      alert("Erreur lors du téléchargement du fichier");
    }
  };
  return (
    <div className="item" onClick={() => dispatch(setActiveFile(blockHash))}>
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
      <img className="download" src={downloadIcon} alt="" />
      <img
        className="moreInfo"
        src={shareIcon}
        onClick={() => {
          dispatch(setActiveFile(blockHash));
          dispatch(setshareForm(true));
        }}
        alt=""
      />
    </div>
  );
};

export default FileIteme;
