import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "./About.module.css";
import licensespdf from "../../images/licenses/1.pdf";
import licenses2pdf from "../../images/licenses/2.pdf";
import licenses3pdf from "../../images/licenses/3.pdf";

const About = () => {

    useEffect(() => {
        document.title = "О компании"
    }, [])

    return (
        <Container>
            <div className={styles.about__wrapper}>
                <h1 className={styles.title}>О нас</h1>
                <div className={styles.textInfo__wrapper}>
                    <p className={styles.info}>Салон красоты «Эфир» возможно лучший салон красоты в Санкт-Петербурге.
                        Если вы зашли на эту страницу, значит вы на пути к максимально качественному обслуживанию в салоне красоты. Вам остается только прийти к нам, чтобы с нашей помощью стать моложе и красивее, зарядиться хорошим настроением.
                    </p>
                    <p className={styles.info}>
                        Мы предлагаем широчайший спектр услуг.
                        Коллектив салона красоты – профессионалы экстра-класса. У нас работают парикмахеры-стилисты, врачи-косметологи, визажисты, мастера маникюра и педикюра, массажисты и другие специалисты. Мы используем только современное косметологическое оборудование и профессиональные средства ведущих мировых брендов.
                        Мы постоянно следим за новинками в области красоты. Все самые современные, сертифицированные, безопасные и доказавшие свою эффективность процедуры и технологии мы сразу же берем на вооружение. Предлагаем уход за волосами, лицом и телом, за руками и ногами. Создание красивых причесок, маникюр и педикюр, программы похудения, услуги стилиста, а также широкий спектр услуг для релакса и омоложения — все это у нас.
                    </p>
                    <p className={styles.info}>
                        Важно, что в студии «Эфир» царит уникальная атмосфера. У нас стильно, уютно, мастера не только большие профессионалы в своём деле, но и приветливые, заботливые, а чай и кофе всегда вкусные. «Это не главное, главное — качество услуг» — скажете вы. А мы ответим: «Несомненно!». Но мы предлагаем качество во всем: качество услуг, сервиса, заботы о клиентах — только на высшем уровне!. Приходите и убедитесь в том, что мы — одни из лучших!
                    </p>
                    <p className={[styles.info, styles.lastInfo].join(" ")}>
                        Основной наш принцип: приходить на работу с хорошим настроением, работать с удовольствием и вдохновенно. Это очень важно, ведь так мы максимально выкладываемся, делая вас красивее, здоровее и радостнее. Мы счастливы работать в полную силу, для Вас!
                    </p>
                </div>
                <div className={styles.partners__wrapper}>
                    <p className={styles.partners__title}>Наши партнеры</p>
                    <div className={styles.partners__list}>
                        <div className={styles.partner__item}><img src="./images/partners/1.webp" height="60px   " alt=""></img></div>
                        <div className={styles.partner__item}><img src="./images/partners/2.webp" height="60px   " alt=""></img></div>
                        <div className={styles.partner__item}><img src="./images/partners/3.webp" height="60px   " alt=""></img></div>
                        <div className={styles.partner__item}><img src="./images/partners/4.webp" height="60px   " alt=""></img></div>
                        <div className={styles.partner__item}><img src="./images/partners/5.webp" height="60px   " alt=""></img></div>
                        <div className={styles.partner__item}><img src="./images/partners/6.webp" height="60px" alt=""></img></div>
                        <div className={styles.partner__item}><img src="./images/partners/7.webp" height="60px" alt=""></img></div>
                        <div className={styles.partner__item}><img src="./images/partners/8.webp" height="60px" alt=""></img></div>
                    </div>
                </div>
                <div className={styles.licenses__wrapper}>
                    <p className={styles.licenses__title}>Наши лицензии</p>
                    <div className={styles.items}>
                        <a href={licensespdf} target="_blank"><img className={styles.image} src="./images/licenses/licenses1.webp" alt="licenses" width="300px"></img></a>
                        <a href={licenses2pdf} target="_blank"><img className={styles.image} src="./images/licenses/licenses2.webp" alt="licenses" width="300px"></img></a>
                        <a href={licenses3pdf} target="_blank"><img className={styles.image} src="./images/licenses/licenses3.webp" alt="licenses" width="300px"></img></a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default About;