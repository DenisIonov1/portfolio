import '../styles/Footer.css'

export const Footer = () => {
    return(
        <div className='footer'>
            <p>Контакты:</p>
            <p><a href="tel:+79949943541">Телефон: +7 994 9943541</a></p>
            <p><a href="mailto:ionov.dse@dvfu.ru">Почта: ionov.dse@dvfu.ru</a></p>
            <ul className='list-buttons'>
                <a href='https://vk.com/denraedoncurry'><img src="../src/assets/vk.png" alt="" /></a>
                <a href='https://t.me/iamionov'><img src="../src/assets/tg.png" alt=""/></a>
                <a href='https://t.me/iamionov'><img src="../src/assets/inst.png" alt="" /></a>
            </ul>
        </div>
    );
};