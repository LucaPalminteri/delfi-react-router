import { Link } from "react-router-dom";
import Buttons from './Buttons'

const NavBar = () => {
    return (
        <header id="header">
            <Link to="/">
                <img src="./logo.bt2.png" alt="" />
            </Link>
            <Buttons type="NavBar" />
        </header>
    )
}

export default NavBar;