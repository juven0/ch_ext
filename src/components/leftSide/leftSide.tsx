import LeftNavs from '../leftNavs/leftNavs'
import Logo from '../logo/logo'
import Upload from '../../assets/icons/download-svgrepo-com.svg'
import LogOut from '../../assets/icons/logout-2-svgrepo-com.svg'

import './leftSide.scss'

const LeftSide = ():JSX.Element=>{
    return(
        <div className="left-side">
            <Logo/>
            <LeftNavs/>
            <div className="upload">
                <img src={Upload} alt="" />
                <label htmlFor="">Import File</label>
            </div>
            <div className="logout">
                <img src={LogOut} alt="" />
                <label htmlFor="">Log Out</label>
            </div>
        </div>
    )
}

export default LeftSide