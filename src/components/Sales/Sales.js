import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Sales.module.css"

export const Sales = () => {
    return (
        <Container>
            <div className={styles.container}>
                <h1>Наши акции</h1>
                <div className={styles.sales__cards}>
                    <div className={styles.sales__card}><p>Скидка 20% на первый визит на все услуги студии</p></div>
                    <div className={styles.sales__card}>
                        <p style={{ fontWeight: "bold" }}>Косметология:</p>
                        <p>Сертификат 1000 рублей на знакомство со специалистом</p>
                    </div>
                    <div className={styles.sales__card}><p>Миндальный уход + в подарок массаж лица 25 минут</p></div>
                    <div className={styles.sales__card}>
                        <p style={{ fontWeight: "bold" }}>Curacen</p>
                        <p>Приведи подругу и пройдите вдвоём эту процедуру за 8000 рублей</p>
                    </div>
                    <div className={styles.sales__card}>
                        <p style={{ fontWeight: "bold" }}>Массаж</p>
                        <p>На первый визит скидка 50% от стоимость процедуры</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}