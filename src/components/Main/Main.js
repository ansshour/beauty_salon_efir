import React, { useEffect } from "react";
import style from "./Main.module.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../images/slider/1.webp";
import img2 from "../../images/slider/2_1.webp";
import img3 from "../../images/slider/3_1.webp";
import img4 from "../../images/slider/4.webp";
import img5 from "../../images/slider/5.webp";
import "./main.css";
import About from "../About/About"
import App1 from "../App1/App1"

function Main() {

    useEffect(() => {
        document.title = "Салон красоты премиум класса «Эфир»"
    }, [])

    return (
        <div className={style.main__wrapper}>
            <div className={style.wrapper}>
                <h1 className={style.main__title}>Наш салон красоты</h1>
                <div className={style.slider__wrapper}>
                    <Carousel controls={true} touch={true} >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="efir1"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="efir2"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="efir3"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img4}
                                alt="efir4"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img5}
                                alt="efir5"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className={style.about}><About /></div>
            <App1 />
        </div>
    )
}

export default Main;