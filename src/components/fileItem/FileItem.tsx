import "./FileItem.scss";

import fileIcon from "../../assets/file_icons/gdoc-document-svgrepo-com.svg";
import shareIcon from "../../assets/icons/share-svgrepo-com.svg";
import downloadIcon from "../../assets/icons/download-minimalistic-svgrepo-com.svg";
import { useAppDispatch } from "../../redux/hooks";
import { FC } from "react";
import { setActiveFile } from "../../redux/slices/activeFile";
import { setshareForm } from "../../redux/slices/shareForm";
import trash from "../../assets/icons/trash-bin-2-svgrepo-com.svg"
import axios from "axios";
import { addHistory } from "../../redux/slices/history";
import { addTrash } from "../../redux/slices/trashSlice";

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
  const handleDownload = async (hash: string, name:string) => {
    try {
      console.log("Démarrage du téléchargement pour hash:", hash);

      const response = await axios.post(
        `http://localhost:3000/get/${hash}`,
        {
          publicKey: "",
          privateKey: ""
        },
        {
          responseType: "blob",
        //   timeout: 30000, // 30 secondes timeout
          onDownloadProgress: (progressEvent) => {
            // Optionnel : ajout d'une barre de progression
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total || progressEvent.loaded)
            );
            console.log(`Progression: ${percentCompleted}%`);
          }
        }
      );

      if (!response.data || response.data.size === 0) {
        throw new Error("Fichier vide reçu");
      }

      // Création du blob et téléchargement
      const blob = new Blob([response.data], {
        type: response.headers["content-type"] || "application/octet-stream"
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = name;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      console.log("Téléchargement terminé avec succès");

    } catch (error) {
      console.error("Erreur de téléchargement:", error);
      let message = "Erreur lors du téléchargement";

      if (axios.isAxiosError(error)) {
        if (error.response) {
          message = error.response.data.message || message;
        } else if (error.request) {
          message = "Impossible de contacter le serveur";
        }
        if (error.code === "ECONNABORTED") {
          message = "Le téléchargement a pris trop de temps";
        }
      }

      // Afficher l'erreur à l'utilisateur
      alert(message);
    }
  };

  return (
    <div className="item" onClick={() =>{
        dispatch(addHistory(blockHash))
        dispatch(setActiveFile(blockHash))}}>
      <div className="icon">
        <img src={fileIcon} alt="" />
      </div>
      <div className="name">
        <label htmlFor="">{name}</label>
      </div>
      <div className="owner">
      </div>
      <div className="date">
        <label htmlFor="">{dateFormater(date)}</label>
      </div>
      <img className="download" src={downloadIcon} onClick={()=>handleDownload(blockHash, name)} alt="" />
      <img
        className="moreInfo"
        src={shareIcon}
        onClick={() => {
          dispatch(setActiveFile(blockHash));

          dispatch(setshareForm(true));
        }}
        alt=""
      />
       <img
        className="delete"
        src={trash}
        onClick={() => {
          dispatch(addTrash(blockHash));
        }}
        alt=""
      />
    </div>
  );
};

export default FileIteme;
