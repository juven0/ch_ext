import './navItem.scss'
import home from '../../assets/icons/home-2-svgrepo-com.svg'

const NavItem = ():JSX.Element =>{
    return(
        <div className="nav-item">
            <img src={home} alt=""  />
            <label htmlFor="">Home</label>
        </div>
    )
}

export default NavItem