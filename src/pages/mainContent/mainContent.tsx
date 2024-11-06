import MainHeader from "../../components/mainHeader/mainHeader";
import QuickAcces from "../../components/QuickAcces/QuickAcces";
import Recent from "../../components/recent/Recent";
import UserStoreInfo from "../../components/userStoreInfo/userStoreInfo";
import "./mainContent.scss";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useEffect, useState } from "react";
import axios from "axios";
import { addFile } from "../../redux/slices/filesSlice";
import FileIteme from "../../components/fileItem/FileItem";

const MainContent = (): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const [files, setFiles] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const menu = useAppSelector((state) => state.menu);
  const userfiles = useAppSelector((state) => state.files);

  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setIsLoad(true);
    await axios
      .get(`http://localhost:3000/user/files/${user.userId}`)
      .then((res) => {
        dispatch(addFile(res.data));
        setFiles(res.data);
        setIsLoad(false);
      });
  };
  return (
    <div className="main">
      <MainHeader />
      {menu.menu === "home" && (
        <>
          <UserStoreInfo />
          <div className="user-data">
            <QuickAcces />
            <Recent />
          </div>
        </>
      )}
      {menu.menu === "folder" &&
      userfiles.files !== undefined &&
      userfiles.files !== null
        ? Object.entries(userfiles.files).map((el) => {
            return (
              <FileIteme
                name={el[1].fileName}
                size=""
                date={el[1].uploadTimestamp}
                blockHash={el[1].blockHash}
              />
            );
          })
        : null}
    </div>
  );
};

export default MainContent;
