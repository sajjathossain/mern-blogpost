import { BsFillBackspaceFill, BsFillPlusSquareFill, BsPeopleCircle } from 'react-icons/bs'

import { AiFillHome } from 'react-icons/ai'
import { IoChevronBackCircleSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={classes.container}>
            <div className={classes.navbarBrand}>Dev Blog</div>
            <ul className={classes.navLinks}>
                <li className={classes.navLink}>
                    <Link to={"/form"}>
                        <BsFillPlusSquareFill />
                    </Link>
                </li>
                <li className={classes.navLink}>
                    <Link to={"/"}>
                        <AiFillHome />
                    </Link>
                </li>
                <li className={classes.navLink}>
                    <Link to={"/dashboard"}>
                        <BsPeopleCircle />
                    </Link>
                </li>
                <li className={classes.navLink}>
                    <Link to={"/logout"}>
                        <IoChevronBackCircleSharp />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
