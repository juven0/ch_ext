import MainHeader from '../../components/mainHeader/mainHeader'
import UserStoreInfo from '../../components/userStoreInfo/userStoreInfo'
import './mainContent.scss'

const MainContent = ():JSX.Element =>{
    return(
        <div className="main">
            <MainHeader/>
            <UserStoreInfo/>
            <div className="user-data">

            </div>
        </div>
    )
}

export default MainContent