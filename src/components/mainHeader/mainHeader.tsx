import './mainHeader.scss'
import Search from '../../assets/icons/magnifer-svgrepo-com.svg'
import Notif from '../../assets/icons/bell-svgrepo-com.svg'

const MainHeader = ():JSX.Element =>{
    return(
        <div className="main-header">
            <div className="info">
                <label htmlFor="">My cloud</label>
                <p>Hello Andreas, Welcome back !</p>
            </div>
            <div className="search">
                <img src={Search} alt=""  />
                <input type="text" name="" id="" placeholder='Search your file' />
            </div>
            <div className="notif">
                <img src={Notif} alt="" />
            </div>
        </div>
    )
}

export default MainHeader