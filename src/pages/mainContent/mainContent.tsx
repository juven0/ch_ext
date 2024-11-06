import MainHeader from "../../components/mainHeader/mainHeader";
import QuickAcces from "../../components/QuickAcces/QuickAcces";
import Recent from "../../components/recent/Recent";
import UserStoreInfo from "../../components/userStoreInfo/userStoreInfo";
import "./mainContent.scss";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useEffect, useState } from "react";
import axios from "axios";

const MainContent = (): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const [files, setFiles] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
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
      <UserStoreInfo />
      <div className="user-data">
        <QuickAcces />
        <Recent />
      </div>
    </div>
  );
};

export default MainContent;
