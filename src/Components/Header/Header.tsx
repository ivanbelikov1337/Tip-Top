import {FC} from 'react';
import {Link} from "react-router-dom";
import {FaRegUserCircle} from 'react-icons/fa';
import styles from "./header.module.css"
import Search from "../Search/Search";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Link to={"/"} className={styles.logo}>
                <h1>TIP TOP</h1>
            </Link>
            <Search/>
            <FaRegUserCircle size={40}/>
        </header>
    );
}

export default Header;