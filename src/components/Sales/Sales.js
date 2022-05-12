import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import styles from "./Sales.module.css"
import { SalesModal } from "./SalesModal/SalesModal";



const salesData = [
    {
        image: "https://i.ibb.co/n6Dgfxd/1.png",
        title: "Знакомство со студией",
        text: `Скидка 20% на все услуги при первом посещении студии «Эфир».`
    },
    {
        image: "https://i.ibb.co/bJ8kxvR/2.png",
        title: "Знакомство с косметологом",
        text: `Сертификат на косметологию 1000 рублей на любую услугу.`
    },
    {
        image: "https://i.ibb.co/bbt53hJ/3.png",
        title: "Миндальный уход + массаж лица",
        text: `При посещении услуги "миндальный уход" 25 минут массажа лица в подарок.`
    },
    {
        image: "https://i.ibb.co/smMdbnK/4.png",
        title: "С подругой выгоднее",
        text: `Пройдите процедуру Curacen (процедура для омоложения области глаз) вместе с подругой за 8000 руб вместо 16000 руб.`
    },
    {
        image: "https://i.ibb.co/c1PjvD2/5.png",
        title: "Первое посещение массажа",
        text: `На первое посещение массажа действует скидка 50%. Стоимость процедуры: 2000 руб. Длительность: 30 минут.`
    },
    {
        image: "https://i.ibb.co/hHtjg2c/6.png",
        title: "Стрижка + укладка",
        text: `При посещении процедуры "Стрижка" за 3000 руб., дарим укладку в подарок!`
    }
]


const SalesCard = ({ image, title, info, setModalActive, setModalData }) => {

    const modalClick = () => {
        setModalData({ title })
        setModalActive(true)
    }


    return (
        <Col xl="3" lg="4" md="6" sm="12">
            <Card style={{ width: '17rem', marginBottom: "30px" }} className={styles.card_} >
                <Card.Img variant="top" src={image} />
                <Card.Body className={styles.cardBody}>
                    <div style={{ padding: "10px 0px" }}>
                        <Card.Title style={{ height: "50px" }}>{title}</Card.Title>
                        <Card.Text style={{ height: "120px" }}>
                            {info}
                        </Card.Text>
                    </div>
                    <Button className={styles.button} variant="dark" onClick={modalClick}>Участвовать в акции</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export const Sales = () => {

    useEffect(() => {
        document.title = "Акции"
    }, [])

    const [isModalActive, setIsModalActive] = useState(false);
    const [modalData, setModalData] = useState({});

    return (
        <div>
            <Container style={{ paddingTop: "120px" }}>
                <Row>
                    {salesData.map((data, i) => <SalesCard className={styles.card} image={data.image} title={data.title} info={data.text} key={i} setModalActive={setIsModalActive} setModalData={setModalData} />)}
                </Row>
            </Container>
            <SalesModal modalActive={isModalActive} setModalActive={setIsModalActive} modalData={modalData} />
        </div>
    )
}