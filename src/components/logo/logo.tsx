import iconIMG from '../../assets/icons/cloud-sun-svgrepo-com.svg'
import './logo.scss'

const Logo = ():JSX.Element=>{
    return(
        <div className="logo">
            <img src={iconIMG} alt="" />
            <label htmlFor="">Chain Store</label>
        </div>
    )
}

export default Logo