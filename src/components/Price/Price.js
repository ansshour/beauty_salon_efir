import React from "react";
import styles from "./Price.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import Tab from "./Tab/Tab";
import { Container } from 'react-bootstrap';
import { getData } from "./data";
import { useState, useEffect } from "react";
import { HairService } from "./Tab/Tab";

const data = getData();

const Price = (props) => {
    useEffect(() =>{
        document.title = "Цены на услуги"
    },[])

    const [content, setContent] = useState(HairService);
    const [activeTab, setActiveTab] = useState(0);

    const createTabs = (data) => {
        return (
            Object.keys(data).map((elemData, i) => {
                return <Tab key={i} id={i} name={elemData} content={content} setContent={setContent} setActiveTab={setActiveTab} activeTab={activeTab} />
            })
        )
    }

    return (
        <div className={styles.container_}>
            <Container>
                <h1 className={styles.title}>Оказываемые услуги</h1>
                <div className={styles.tab__list}>
                    {createTabs(data)}
                </div>
                <div className={styles.content}>
                    {content}
                </div>
            </Container>
        </div>
    )
}

export default Price;