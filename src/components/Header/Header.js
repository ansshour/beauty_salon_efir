import { React, useState, useEffect } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import style from "./Header.module.css";
import { Routes, Route, Link } from "react-router-dom";
import Main from "../Main/Main";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Price from "../Price/Price";
import Team from "../Team/Team";


function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 768) {
            document.addEventListener("scroll", () => {
                if (window.scrollY > 50) {
                    setIsScrolled(true)
                } else {
                    setIsScrolled(false)
                }
            })
        }

    }, [])

    const scrollTop = () => {
        if (window.scrollY > 0) {
            window.scrollTo(0, 0);
        }
    }

    return (
        <>
            <Navbar className={style.navbar} style={isScrolled ? { height: "50px" } : {}} variant="dark" fixed="top" expand="md" collapseOnSelect>
                <Container className={style.container}>
                    <Link to="/" className={style.logo}><Navbar.Brand className={style.logo} href="/" onClick = {scrollTop}>Эфир</Navbar.Brand></Link>
                    <NavbarToggle area-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className={style.navbar__items + " me_auto"}>
                            <Link to="/about"><Nav.Link className={style.navbar__item} href="/about" onClick = {scrollTop}>О компании</Nav.Link></Link>
                            <Link to="/team"><Nav.Link className={style.navbar__item} href="/team" onClick = {scrollTop}>Команда</Nav.Link></Link>
                            <Link to="/price"><Nav.Link className={style.navbar__item} href="/price" onClick = {scrollTop}>Цены</Nav.Link></Link>
                            <Link to="/contacts"><Nav.Link className={style.navbar__item} href="/contacts" onClick = {scrollTop}>Контакты</Nav.Link></Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/price" element={<Price />} />
                <Route path="/team" element={<Team />} />
                <Route path="*" element={<Main />} />
            </Routes>
        </>
    )
}

export default Header;