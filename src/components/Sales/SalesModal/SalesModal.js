import React, { useState } from "react";
import styles from "./SalesModal.module.css";
import { Form, Button } from "react-bootstrap";

export const SalesModal = ({ name, isSalesModalOpen }) => {


    return (
        <div className={styles.container} style={isSalesModalOpen ? { opacity: "1" } : { opacity: "0" }}>
            <div className={styles.wrapper}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Название услуги: {name}</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ваше имя</Form.Label>
                        <Form.Control type="name" placeholder="Ваше имя" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ваша почта</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ваш номер телефона</Form.Label>
                        <Form.Control type="Номер телефона" placeholder="+7 (999) 999 9999" />
                    </Form.Group>
                    <Button variant="dark" className="mt-3" type="submit">
                        Участвовать в акции
                    </Button>
                </Form>
            </div>
        </div>
    )
}