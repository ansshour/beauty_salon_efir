import React, { useState } from "react";
import styles from "./SalesModal.module.css";
import { Form, Button } from "react-bootstrap";

export const SalesModal = ({ modalActive, setModalActive, modalData }) => {


    return (
        <div className={modalActive ? `${styles.container} ${styles.active}` : `${styles.container}`} onClick={() => { setModalActive(false) }}>
            <div className={modalActive ? `${styles.modal} ${styles.modalActive}` : `${styles.modal}`} onClick={e => e.stopPropagation()}>
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Название услуги: {modalData.title}</p>
                <Form>
                    <Form.Group className="mb-2">
                        <Form.Label style={{ marginBottom: "1px" }}>Ваше ФИО</Form.Label>
                        <Form.Control className={styles.input} type="name" placeholder="Иванов Иван Иванович" />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label style={{ marginBottom: "1px" }}>Ваш номер телефона</Form.Label>
                        <Form.Control className={styles.input} type="phone" placeholder="+7 (999) 999 999" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Участвовать в акции
                    </Button>
                </Form>
            </div>
        </div>
    )
}