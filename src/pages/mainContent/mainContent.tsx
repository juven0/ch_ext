import MainHeader from "../../components/mainHeader/mainHeader";
import QuickAcces from "../../components/QuickAcces/QuickAcces";
import Recent from "../../components/recent/Recent";
import UserStoreInfo from "../../components/userStoreInfo/userStoreInfo";
import "./mainContent.scss";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import axios from "axios";

const MainContent = (): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const files = null;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(`http://localhost:3000/user/files/${user.user_id}`)
      .then((res) => {
        console.log(res.data);
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
