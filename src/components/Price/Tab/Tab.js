import styles from "./Tab.module.css";

export const HairService = () => {
    return (
        <div className={styles.content__container}>
            <div className={styles.sectionName}>Парикмахерские услуги</div>
            <div className={styles.withscroll}>
                <div className={styles.sex}>Женщины</div>
                <div className={styles.service}>Стрижки/укладки</div>
                <table className={styles.tableBody}>
                    <tr>
                        <td className={styles.tableName}>Стрижка</td>
                        <td>2800 ₽</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Детская стрижка до 7 лет</td>
                        <td>1390 ₽</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Детская стрижка</td>
                        <td>2000 ₽</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Коррекция челки</td>
                        <td>1000 ₽</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Мытье головы</td>
                        <td>900 ₽</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Сушка</td>
                        <td>1200 ₽</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Укладка №1 (брашинг, стайлинг)</td>
                        <td>2500 ₽</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Укладка №2 (термо-стайлеры, стайлинг, укладка с элементами прически)</td>
                        <td>3300 ₽</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <div className={styles.service}>Окрашивание</div>
                <table className={styles.tableBody}>
                    <tr>
                        <td className={styles.tableName}>Окрашивание/тонирование</td>
                        <td>2800 ₽</td>
                        <td>3300 ₽</td>
                        <td>4400 ₽</td>
                        <td>6000 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Мелирование</td>
                        <td>3000 ₽</td>
                        <td>4500 ₽</td>
                        <td>6000 ₽</td>
                        <td>8000 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Трендовое окрашивание</td>
                        <td>4300 ₽</td>
                        <td>6600 ₽</td>
                        <td>8100 ₽</td>
                        <td>10100 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Декапирование (снятие цвета)</td>
                        <td>1500 ₽</td>
                        <td>2000 ₽</td>
                        <td>3000 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Глубокое декапирование</td>
                        <td>2500 ₽</td>
                        <td>3500 ₽</td>
                        <td>4500 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Блондирование</td>
                        <td>3500 ₽</td>
                        <td>4000 ₽</td>
                        <td>5000 ₽</td>
                        <td></td>
                    </tr>
                </table>
                <div className={styles.service}>Восстанавливающие программы</div>
                <table className={styles.tableBody}>
                    <tr>
                        <td className={styles.tableName}>«LEBEL» (Япония)</td>
                        <td>2000 ₽</td>
                        <td>2500 ₽</td>
                        <td>2800 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Уход «Блеск и сила» молекулярное восстановление волос</td>
                        <td>2000 ₽</td>
                        <td>2500 ₽</td>
                        <td>2800 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>«Абсолютное счастье» (Япония)</td>
                        <td>2500 ₽</td>
                        <td>3500 ₽</td>
                        <td>5000 ₽</td>
                        <td></td>
                    </tr>
                </table>
                <div className={styles.sex} style={{ marginTop: "20px", marginBottom: "10px" }}>Мужчины</div>
                <table className={styles.tableBody}>
                    <tr>
                        <td className={styles.tableName}>Мужская стрижка</td>
                        <td>1600 ₽</td>
                        <td>1800 ₽</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Стрижка машинкой</td>
                        <td>800 ₽</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Моделирование бороды/усов</td>
                        <td>1400 ₽</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Коррекция бороды/усов</td>
                        <td>800 ₽</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Комуфляж седины</td>
                        <td>1400 ₽</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

const NailService = () => {
    return (
        <div className={styles.content__container}>
            <div className={styles.sectionName}>Ногтевой сервис</div>
            <div className={styles.withscroll}>
                <div className={styles.service}>Маникюр</div>
                <table className={styles.tableBody}>
                    <tr>
                        <td className={styles.tableName}>Женский маникюр</td>
                        <td>1400 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Мужской маникюр</td>
                        <td>1400 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Покрытие ногтей лаком/Vinylux</td>
                        <td style={{ width: "100px" }}>500 ₽</td>
                        <td>600 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Покрытие ногтей гель-лаком</td>
                        <td>1400 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Покрытие ногтей гель-лаком «Френч», «Лунки»</td>
                        <td>1600 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Маникюр с лечебным покрытием лаком</td>
                        <td>1900 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>SPA маникюр</td>
                        <td>2000 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Экспресс SPA-уход»</td>
                        <td>600 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Наращивание ногтей</td>
                        <td>5000 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Коррекция искусственных ногтей</td>
                        <td>3000 ₽</td>
                        <td></td>
                    </tr>
                </table>
                <div className={styles.service}>Педикюр</div>
                <table className={styles.tableBody}>
                    <tr>
                        <td className={styles.tableName}>Женский педикюр</td>
                        <td>2500 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Мужской педикюр</td>
                        <td>2800 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Экспресс педикюр</td>
                        <td>1500 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>SPA педикюр</td>
                        <td>3000 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Обработка вросшего ногтя</td>
                        <td>от 400 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Обработка стержневых мозолей</td>
                        <td>400 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Педикюр Golden Trace</td>
                        <td>2600 ₽</td>
                        <td></td>
                    </tr>
                </table>
                <div className={styles.service}>Дополнительные услуги</div>
                <table className={styles.tableBody}>
                    <tr>
                        <td className={styles.tableName}>Снятие лака</td>
                        <td>150 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Снятие гель-лака</td>
                        <td>450 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Снятие искусственных ногтей</td>
                        <td>700 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Реставрация ногтей (за 1 ноготь)</td>
                        <td>400 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Укрепление/выравнивание ногтей</td>
                        <td>400 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Дизайн ногтей №1 (втирки, битое стекло, фольга)</td>
                        <td>от 50 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Дизайн ногтей №2 (градиент)</td>
                        <td>от 80 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Дизайн ногтей №3 (художественная роспись)</td>
                        <td>от 300 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Укрепление ногтей IBX</td>
                        <td>500 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Инкустрация стразами</td>
                        <td>700 ₽</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Дизайн ногтей стразами</td>
                        <td>50 ₽</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

const Massage = () => {
    return (
        <div className={styles.content__container}>
            <div className={styles.sectionName}>Массаж и уход по телу</div>
            <div className={styles.withscroll}>
                <div className={styles.service}>Массаж и уход по телу</div>
                <table className={styles.tableBody}>
                    <tr>
                        <td className={styles.tableName}>Массаж классический</td>
                        <td>2500 ₽</td>
                        <td>3200 ₽</td>
                        <td>4500 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Массаж антицеллюлитный</td>
                        <td>2700 ₽</td>
                        <td>3500 ₽</td>
                        <td>4800 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Массаж детский</td>
                        <td>800 ₽</td>
                        <td>1500 ₽</td>
                    </tr>
                </table>
                <div className={styles.service}>Уход по телу Thalasso bretagne (Франция)</div>
                <table className={styles.tableBody}>
                    <tr>
                        <td className={styles.tableName}>Пилинг тела, самостоятельная процедура с завершающим уходом</td>
                        <td>1500 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>«Детокс» программа очищения организма, похудение</td>
                        <td>4500 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>«Контур тела» обертывание для коррекции фигуры</td>
                        <td>4500 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>«Альгопласт» похудение и дренаж</td>
                        <td>4500 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>«Три-актив» утончение, минерализация, укрепление</td>
                        <td>5000 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Водорослевое обертывание (Спирулина)</td>
                        <td>3500 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Шоколадное обертывание</td>
                        <td>2500 ₽</td>
                    </tr>
                </table>
                <div className={styles.service}>LPG Cellu M6 Integral</div>
                <table className={styles.tableBody}>
                    <tr>
                        <td className={styles.tableName}>Эргодрайв-липомассаж</td>
                        <td>1900 ₽</td>
                        <td>2300 ₽</td>
                        <td>2900 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Дренаж</td>
                        <td>1900 ₽</td>
                        <td>2300 ₽</td>
                        <td>2900 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Восстановление и укрепление качества кожи</td>
                        <td>1900 ₽</td>
                        <td>2300 ₽</td>
                        <td>2900 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Легкие ноги</td>
                        <td>1900 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Лицо, область вокруг глаз</td>
                        <td>1300 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Лицо</td>
                        <td>2500 ₽</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

const MakeService = () => {
    return (
        <div className={styles.content__container}>
            <div className={styles.sectionName}>Макияж | Брови</div>
            <div className={styles.withscroll}>
                <table className={styles.tableBody}>
                    <tr>
                        <td className={styles.tableName}>Дизайн бровей</td>
                        <td>900 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Окрашивание бровей краской</td>
                        <td>900 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Окрашивание бровей хной</td>
                        <td>1000 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Окрашивание ресниц</td>
                        <td>900 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Макияж дневной</td>
                        <td>2500 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Макияж вечерний</td>
                        <td>3600 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Макияж свадебный</td>
                        <td>5000 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Репетиция свадебного макияжа</td>
                        <td>3000 ₽</td>
                    </tr>
                    <tr>
                        <td className={styles.tableName}>Репетиция свадебной прически</td>
                        <td>3000 ₽</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

const Cosmetology = () => {
    return (
        <div className={styles.content__container}>
            <div className={styles.sectionName}>Косметология</div>
            <div className={styles.withscroll}>
                <table className={styles.tableBody}>
                    Тут пока пусто :)
                </table>
            </div>
        </div>
    )
}

const FigureCorrection = () => {
    return (
        <div className={styles.content__container}>
            <div className={styles.sectionName}>Программы коррекции фигуры</div>
            <div className={styles.withscroll}>
                <table className={styles.tableBody}>
                    Тут пока пусто :)
                </table>
            </div>
        </div>
    )
}

const HardwareProcedures = () => {
    return (
        <div className={styles.content__container}>
            <div className={styles.sectionName}>Аппаратные процедуры</div>
            <div className={styles.withscroll}>
                <table className={styles.tableBody}>
                    Тут пока пусто :)
                </table>
            </div>
        </div>
    )
}

const InjectionProcesures = () => {
    return (
        <div className={styles.content__container}>
            <div className={styles.sectionName}>Инъекционные процедуры</div>
            <div className={styles.withscroll}>
                <table className={styles.tableBody}>
                    Тут пока пусто :)
                </table>
            </div>
        </div>
    )
}

const price = [
    HairService,
    NailService,
    Massage,
    MakeService,
    Cosmetology,
    FigureCorrection,
    HardwareProcedures,
    InjectionProcesures
]

const Tab = (props) => {


    return (
        <div>
            <div className={`${styles.tab__wrapper} ${props.activeTab === props.id ? styles.activeTab : ""}`}
                onClick={() => {
                    props.setContent(price[props.id]);
                    props.setActiveTab(props.id);
                }}
            >{props.name}</div>
        </div>
    )
}

export default Tab;