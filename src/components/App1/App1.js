import "./App1.css";
import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap"
export default function App() {

    const contentArr = [
        "https://chudo-prirody.com/uploads/posts/2021-08/1628811024_148-p-pushistie-koti-foto-155.jpg",
        "https://vsthemes.org/uploads/posts/2017-08/1582034175_white-cat_vsthemes_ru-46.jpg",
        "https://data11.gallery.ru/albums/gallery/288990-99101-32019107-m750x740-u7b9e2.jpg",
        "https://club.foto.ru/gallery/images/photo/2018/03/13/2547829.jpg",
        "https://pro-kotikov.ru/wp-content/uploads/2019/02/kotohleb-photo-6.jpg"
    ]
    const [content, setContent] = useState(contentArr);

    const [vissibleContent, setVissibleContent] = useState(content[0]);
    const [useAnimation, setUseAnimation] = useState(false);


    const rightClickHundler = () => {
        let temp = content[0];
        for (let i = 0; i < content.length - 1; i++) {
            content[i] = content[i + 1];
        }
        content[content.length - 1] = temp;
        setUseAnimation(true);
        setTimeout(() => {
            setVissibleContent(content[0]);
        }, 100)
        setTimeout(() => {
            setUseAnimation(false);
        }, 700)
    };


    return (

        <Container>
            <div className="container">
                <div className="carousel__wrapper">
                    <button className="prev">Prev</button>
                    <div className={useAnimation ? "content anim" : "content"} > <img src = {vissibleContent} width = "600px"/></div>
                    <button className="next" onClick={rightClickHundler}>
                        Next
                    </button>
                </div>
            </div>
        </Container >
    );
}
