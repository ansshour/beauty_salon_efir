import React, {useEffect} from "react";
import styles from "./Contacts.module.css";
import { Container } from 'react-bootstrap';
import { faClock, faLocationDot, faArrowUpRightFromSquare, faPhone, faEnvelope, faUserPen, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare, faVk } from "@fortawesome/free-brands-svg-icons";

const Contacts = () => {
    useEffect(() => {
        document.title = "Контакты"
    }, [])
    return (
        <Container>
            <div className={styles.container__wrapper}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.image}></div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>Эфир на Парадной</h3>
                            <div className={styles.address}><span className={styles.icon}><FontAwesomeIcon icon={faLocationDot} /></span>Санкт-Петербург, ул. Парадная, д.3 к.2</div>
                            <div className={styles.workTime}>
                                <div><span className={styles.icon}><FontAwesomeIcon icon={faClock} /></span>пн-пт 10:00–22:00</div>
                                <div><span className={styles.icon}><FontAwesomeIcon icon={faClock} /></span>сб,вс 10:00–21:00</div>
                            </div>
                            <div className={styles.map}><a href="https://yandex.ru/maps/org/efir/244828006245/?ll=30.369101%2C59.941155&z=15.14" target="_blank"><span className={styles.icon}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>Открыть на карте</a></div>
                            <div className={styles.phones}>
                                <div className={styles.phone}><a href="tel:+79817920637" target="_blank"><span className={styles.icon}><FontAwesomeIcon icon={faPhone} /></span>+7 (981) 792-06-37</a></div>
                                <div className={styles.phone}><a href="tel:+78123177795" target="_blank"><span className={styles.icon}><FontAwesomeIcon icon={faPhone} /></span>+7 (812) 317-77-95</a></div>
                            </div>
                            <div className={styles.mail}><a href="mailto:efirad@yandex.ru"><span className={styles.icon}><FontAwesomeIcon icon={faEnvelope} /></span>efirad@yandex.ru</a></div>
                            <div className={styles.signUp}><a href="https://wa.me/79817920637" target="_blank"><span className={styles.icon}><FontAwesomeIcon icon={faAddressBook} /></span>Записаться онлайн</a></div>
                            <div className={styles.socialNetworks}>
                                <a href="https://vk.com/efir_salon" target="_blank" className={styles.socialNetwork}><FontAwesomeIcon className={styles.vk} icon={faVk} /></a>
                                <a href="https://www.instagram.com/salon_efir/" target="_blank" className={styles.socialNetwork}><FontAwesomeIcon className={styles.instagram} icon={faInstagramSquare} /></a>
                            </div>
                            <div style = {{marginTop:"10px", textDecoration:"underline"}}>У нас есть платная парковка (100 руб/ч)</div>
                        </div>
                    </div>
                </div>
            </div >
        </Container >
    )
}

export default Contacts;