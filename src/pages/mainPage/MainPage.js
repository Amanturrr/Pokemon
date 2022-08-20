import React from 'react';
import classes from "./mainPage.module.css";
import Pokemon from "../../components/pokemon/Pokemon";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const MainPage = () => {
    return (
        <div className={classes.container}>
            <Header/>
            <div className={classes.sort}>
                <Pokemon/>
                <Footer/>
            </div>
        </div>
    );
};

export default MainPage;