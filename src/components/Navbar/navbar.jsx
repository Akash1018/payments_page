import './navbar.css'
import { selectsList } from '../../data'

const Navbar = () => (
    <nav className="navbar-container">
        <div className="nav-container">
            <div className="logo-and-select-container">
                <button type="button" className="button"  >
                    <h1 className="logo">EDYOGA</h1>
                </button>
                <ul className="select-container">
                    {selectsList.map(item => (
                        <li key={item.id} className="select">
                            <button type="button" className="button select"  >
                                {item.select} <img src={item.arrowImg} alt='arrow' className="arrow-img" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <ul className="search-and-login-container" style={{padding: 0, listStyleType: "none"}}>
                <li>
                    <button type="buttonOption" className="buttonOption" style={{marginLeft: 64, paddingTop: 10}}>
                        <img src='https://res.cloudinary.com/dpmyvq5te/image/upload/v1685181467/Vector2_p9m6kn.png' alt="search" className="search-img" />
                    </button>
                </li>
                <li>
                    <button type="buttonOption" className="buttonOption" style={{marginLeft: 64}}>Login</button>
                </li>
                <li>
                    <button  type="buttonOption" className="buttonOption join-button" style={{marginLeft: 64}}>JOIN NOW</button>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar