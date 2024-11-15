import './mainHeader.scss'
import Search from '../../assets/icons/magnifer-svgrepo-com.svg'

const MainHeader = ():JSX.Element =>{
    return(
        <div className="main-header">
            <div className="info">
                <label htmlFor="">My Nebula</label>
                <p>Hello, Welcome back !</p>
            </div>
            <div className="search">
                <img src={Search} alt=""  />
                <input type="text" name="" id="" placeholder='Search your file' />
            </div>

        </div>
    )
}

export default MainHeader
