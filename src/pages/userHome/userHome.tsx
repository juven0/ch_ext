import LeftSide from '../../components/leftSide/leftSide'
import MainContent from '../mainContent/mainContent'
import './userHome.scss'


const UserHome = ():JSX.Element=>{
    return(

        <div className="user-home">
        <div className="super">
            </div>
            <LeftSide/>
            <MainContent/>
        </div>

    )
}

export default UserHome
