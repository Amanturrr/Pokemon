import React from 'react';
import classes from "./footer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faFacebookF, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className={classes.container} id="contacts">
            <h4>Subscribe to us!</h4>
            <div className={classes.icons}>
                <a href="https://www.instagram.com/PokemonNewsUK/" className={classes.pink} target="_blank">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="https://www.facebook.com/PokemonUKGB" className={classes.blue} target="_blank">
                    <FontAwesomeIcon icon={faFacebookF}/>
                </a>
                <a href="https://twitter.com/PokemonNewsUK" className={classes.blue} target="_blank">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="https://www.youtube.com/channel/UCTVSfDNBRYINEfo6oZ1v6Nw" className={classes.red} target="_blank">
                    <FontAwesomeIcon icon={faYoutube}/>
                </a>
            </div>
        </div>
    );
};

export default Footer;