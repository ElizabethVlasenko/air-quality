import React, {useState} from 'react';
import './HeroBlock.scss';
import useScreenSize from '../../utils/useScreenSize.js';

const HeroBlock = ({bgImg, title, links, logos}) =>{
    const [isMenuOpen, setMenuOpen] = useState(false);
    const logosImages = logos.map((logoItem, i) => <img src={logoItem} alt="partner-logo" className="hero-partners-item" key={i}/>);
    const navItems = links.map((link) => <a href={link.href} key={link.id} className="hero-navigation-item">{link.title}</a>);
    const toggleMenu = () => {
	    setMenuOpen(!isMenuOpen)
    }
    
    
    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-partners">
                    {logosImages}
                    {(useScreenSize() < 768)
                    ? <img onClick={toggleMenu} className="hero-menu-burger" src={require("../../assets/menu.png")}/>
                    : null
                }
                </div>
                <div className="hero-navigation">
                    {navItems}
                </div>
                <h1 className="hero-title">{title}</h1>
                <a href="#quality" className="hero-link">Отследить</a>
                
                <div className={`hero-menu ${
                isMenuOpen 
                ? "hero-menu-show"
                : ""
                }`} style={{width: useScreenSize()+"px"}}>
                        <img onClick={()=> {setMenuOpen(false)}} className="hero-menu-cross" src={require("../../assets/cross.png")}/>
                    <div className="hero-menu-navigation">
                    {navItems}
                    </div>
                    <p className="hero-menu-text">2020, Все права защищены</p>
                    <p className="hero-menu-text">Согласие на обработку персональных данных <br/>
                    Политика конфиденциальности</p>
                </div>
            </div>
        </section>
    );
}

export default HeroBlock;