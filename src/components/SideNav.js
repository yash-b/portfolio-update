import { useState } from 'react';
import styles from './sidenav.css';
import { NavLink } from 'react-router-dom';
import { pageData } from '../data/pageData.js';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

export default function ResumeSideNav() {
    // const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className={open?styles.sideNav:styles.sidenavClosed}>
            <button className={styles.btn} onClick={toggleOpen}>
                {open? <CloseTwoToneIcon />:<MenuTwoToneIcon />}
            </button>
            {pageData.map(item =>{
                return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                    {item.icon}
                    <span className={styles.linkText}>{item.text}</span>
                </NavLink>
            })}
        </div>
    )
}