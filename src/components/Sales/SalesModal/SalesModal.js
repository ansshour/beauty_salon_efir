import React, { useState } from "react";
import styles from "./SalesModal.module.css";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

export const SalesModal = ({ modalActive, setModalActive, modalData }) => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_2fog2mq", "template_owkgzk4", e.target, "IT8ug2LgzJmA6IvGA").then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }


    return (
        <div className={modalActive ? `${styles.container} ${styles.active}` : `${styles.container}`} onClick={() => { setModalActive(false) }}>
            <div className={modalActive ? `${styles.modal} ${styles.modalActive}` : `${styles.modal}`} onClick={e => e.stopPropagation()}>
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Название услуги: {modalData.title}</p>
                <form onSubmit={sendEmail}>
                    <label>ФИО</label>
                    <input type="text" name="name" />
                    <label>Телефон</label>
                    <input type="phone" name="phone" />
                    <input type="submit" value="Участвовать в акции" />
                </form>
            </div>
        </div>
    )
}