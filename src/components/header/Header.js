import React from 'react';
import classes from "../header/header.module.css";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.red}>
                <div className={classes.menu}>
                    <h1>Pokedex</h1>
                </div>
            </div>
            <div className={classes.line}>
                <div className={classes.circle}>{}</div>
            </div>
            <div className={classes.line2}>{}</div>
        </div>
    );
};

export default Header;