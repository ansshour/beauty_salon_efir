import React, { useState } from "react";
import styles from "./SalesModal.module.css";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

export const SalesModal = ({ modalActive, setModalActive, modalData }) => {

    const [fio, setFio] = useState("");
    const [phone, setPhone] = useState("");


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_2fog2mq", "template_owkgzk4", e.target, "IT8ug2LgzJmA6IvGA").then(res => {
            console.log(res)
        }).catch(err => console.log(err))
        setModalActive(false)
    }

    const fioInputHandler = (e) => {
        setFio(e.target.value)
    }

    const phoneInputHandler = (e) => {
        setPhone(e.target.value)
    }


    return (
        <div className={modalActive ? `${styles.container} ${styles.active}` : `${styles.container}`} onClick={() => { setModalActive(false) }}>
            <div className={modalActive ? `${styles.modal} ${styles.modalActive}` : `${styles.modal}`} onClick={e => e.stopPropagation()}>
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Название услуги: {modalData.title}</p>
                <form className={styles.form} onSubmit={sendEmail}>
                    <div className={styles.serviceName}>
                        <input name = "serviceName" type = "hidden" value = {modalData.title}/>
                    </div>
                    <div className={styles.form__item}>
                        <label>ФИО</label>
                        <input type="text" name="name" placeholder="Иванов Иван Иванович" value = {fio} className={styles.input} onChange={fioInputHandler}/>
                    </div>
                    <div className={styles.form__item}>
                        <label>Номер телефона</label>
                        <input type="phone" name="phone" placeholder="+7 (999) 999 999" value = {phone} className={styles.input} onChange = {phoneInputHandler}/>
                    </div>
                    <input type="submit" value="Участвовать в акции" className={styles.button}/>
                </form>
            </div>
        </div>
    )
}