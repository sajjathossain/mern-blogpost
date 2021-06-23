import { BsFillBackspaceFill, BsFillPlusSquareFill, BsPeopleCircle } from 'react-icons/bs'

import { AiFillHome } from 'react-icons/ai'
import classes from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={classes.container}>
            <div className={classes.navbarBrand}>Dev Blogs</div>
            <ul className={classes.navLinks}>
                <li className={classes.navLink}>
                    <a href="/create">
                        <BsFillPlusSquareFill />
                    </a>
                </li>
                <li className={classes.navLink}>
                    <a href="/">
                        <AiFillHome />
                    </a>
                </li>
                <li className={classes.navLink}>
                    <a href="/dashboard">
                        <BsPeopleCircle />
                    </a>
                </li>
                <li className={classes.navLink}>
                    <a href="#/logout">
                        <BsFillBackspaceFill />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
