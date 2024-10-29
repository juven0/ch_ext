import MainHeader from "../../components/mainHeader/mainHeader";
import QuickAcces from "../../components/QuickAcces/QuickAcces";
import Recent from "../../components/recent/Recent";
import UserStoreInfo from "../../components/userStoreInfo/userStoreInfo";
import "./mainContent.scss";

const MainContent = (): JSX.Element => {
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
