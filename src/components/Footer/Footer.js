import React from 'react';
import './Footer.scss';

const Footer = ({links, logos}) =>{
    const logosImages = logos.map((logoItem, i) => <img src={logoItem} alt="partner-logo" className="footer-partners-item" key={i}/>);
    const navItems = links.map((link) => <a href={link.href} key={link.id} className="footer-navigation-item">{link.title}</a>);
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-partners">
                    {logosImages}
                </div>
                <div className="footer-text-wrap">
                    <div className="footer-navigation">
                        {navItems}
                    </div>
                    <p className="footer-navigation-text">
                        Сайт был разработан <span>Власенко Елизаветой</span> в учебных целях, в рамках образовательной программы IT nation. Дизайн сайта создан <span>Валерией Бубырь</span>.
                    </p>
                </div>
                <p className="footer-text">2020, Все права защищены</p>
                <p className="footer-text">Согласие на обработку персональных данных <br/>
                Политика конфиденциальности</p>
            </div>
        </footer>
    );
}

export default Footer;