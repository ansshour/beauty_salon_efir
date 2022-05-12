import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import styles from "./Sales.module.css"
import { SalesModal } from "./SalesModal/SalesModal";



const salesData = [
    {
        image: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-48.jpg",
        title: "Card Title 1",
        text: `Some quick example text to build on the card title and make up the bulk of
        the card's content.`
    },
    {
        image: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-48.jpg",
        title: "Card Title 2",
        text: `Some quick example text to build on the card title and make up the bulk of
        the card's content.`
    },
    {
        image: "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-48.jpg",
        title: "Card Title 3",
        text: `Some quick example text to build on the card title and make up the bulk of
        the card's content.`
    }
]


const SalesCard = ({ image, title, info, setModalActive, setModalData }) => {

    const modalClick = () => {
        setModalData({ title })
        setModalActive(true)
    }


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {info}
                </Card.Text>
                <Button className={styles.button} variant="dark" onClick={modalClick}>Участвовать в акции</Button>
            </Card.Body>
        </Card>
    )
}

export const Sales = () => {

    const [isModalActive, setIsModalActive] = useState(false);
    const [modalData, setModalData] = useState({});

    return (
        <div>
            <Container>
                <div className={styles.container_}>
                    {salesData.map((data, i) => <SalesCard image={data.image} title={data.title} info={data.text} key={i} setModalActive={setIsModalActive} setModalData={setModalData} />)}
                </div>
            </Container>
            <SalesModal modalActive={isModalActive} setModalActive={setIsModalActive} modalData={modalData} />
        </div>
    )
}