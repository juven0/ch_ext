import "./userStoreInfo.scss";
import pictureIcon from "../../assets/icons/album-svgrepo-com.svg";
import fileIcon from "../../assets/icons/file-text-svgrepo-com.svg";
import MediaIcon from "../../assets/icons/clapperboard-play-svgrepo-com.svg";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Progress } from '@/components/ui/progress';
import { useAppSelector } from "../../redux/hooks";
import CustomRangeProgress from "../progress/progress";

interface UserStoreInfoProps {
  files: [];
}

const UserStoreInfo = (): JSX.Element => {
    const IMAGE = "IMAGE";
    const MEDIA = "MEDIA";
    const FILE = "FILE";

    const elemets = [IMAGE, MEDIA, FILE]
    const imags = [pictureIcon,MediaIcon, fileIcon]

    const INITIAL_STATE = {
        [IMAGE]: { count: 0, totalSize: 0, files: [] },
        [MEDIA]: { count: 0, totalSize: 0, files: [] },
        [FILE]: { count: 0, totalSize: 0, files: [] }
      };
  const [fileCount, setFileCount] = useState(INITIAL_STATE);
  const [file, setFile] = useState();
  const user = useAppSelector((state) => state.user);
  const userfiles = useAppSelector((state) => state.files);
//   useEffect(() => {
//     setFile(userfiles.files);
//   }, []);




  const getExtension = (fileName) => {
    const lastDotIndex = fileName?.lastIndexOf(".");
    if (lastDotIndex === -1) return "";
    return fileName?.slice(lastDotIndex).toLowerCase();
  };

  // Fonction pour déterminer le type de fichier
  const FileFilter = (ext) => {
    const Image = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp", ".tiff", ".ico", ".heic",
                  ".svg", ".ai", ".eps", ".raw", ".cr2", ".nef", ".psd", ".xcf"];
    const Media = [".mp4", ".avi", ".mov", ".wmv", ".flv", ".mkv", ".webm", ".m4v", ".mpeg",
                  ".mpg", ".3gp", ".3g2", ".h264", ".m2ts", ".prproj", ".fcpx", ".dav", ".mxf",
                  ".vob", ".mp3", ".wav", ".ogg", ".m4a", ".wma", ".aac", ".flac", ".alac",
                  ".aiff", ".ac3", ".mid", ".midi"];

    if (Image.includes(ext)) {
      return IMAGE;
    } else if (Media.includes(ext)) {
      return MEDIA;
    } else {
      return FILE;
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Byte';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const fetchData = async () => {
    await axios
      .get(`http://localhost:3000/user/files/${user.userId}`)
      .then((res) => {
        setFile(res.data)
        if(res.data.files.length > 0){
                const stats = res.data.files.reduce((acc, file) => {
            const ext = getExtension(file.fileName);
            const type = FileFilter(ext);

            if (!acc[type]) {
            acc[type] = {
                count: 0,
                totalSize: 0,
                files: []
            };
            }

            acc[type].count += 1;
            acc[type].totalSize += file.size;
            acc[type].files.push({
            name: file.fileName,
            size: file.size
            });

            return acc;
        }, {});

         setFileCount(stats)
        console.log((fileCount[FILE].totalSize / Math.pow(1024, 3))*100000)
           }
      });
  };

  useEffect(()=>{
    fetchData()
  }, [userfiles])


  return (
    <div className="user-store-info">
        {
            elemets.map((el,i)=>{
                return <div className="store-info-card" key={i}>
                <img src={imags[i]} alt="" />
                <div className="card-storage">
                  <label htmlFor="">{el}</label>
                  <label htmlFor=""> {
                            fileCount[elemets[i]]!== undefined?
                            formatFileSize( fileCount[elemets[i]].totalSize):0
                        }</label>
                </div>
                <div className="storage">
                  <label htmlFor="" className="file-number">
                     {
                        fileCount[elemets[i]]!== undefined?
                        fileCount[elemets[i]].count: 0} {el}
                  </label>
                        {
                          fileCount[elemets[i]]!== undefined?
                            <CustomRangeProgress
                            value={(fileCount[elemets[i]].totalSize / Math.pow(518, 3))*100}
                            color={'#FF6384'}
                            key={i}/> :<CustomRangeProgress
                            value={0}
                            color={'#FF6384'}
                            />
                        }
                  <div className="capac">
                    <label htmlFor="">
                        {
                            fileCount[elemets[i]]!== undefined?
                            formatFileSize( fileCount[elemets[i]].totalSize):0
                        }
                        </label>
                    <label htmlFor="">10Go</label>
                  </div>
                </div>
              </div>
            })
        }


    </div>
  );
};

export default UserStoreInfo;
