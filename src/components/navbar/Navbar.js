import logo from    "../../img/logo.png"
import NavbarStyle from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <div className={NavbarStyle["nav"]}>
        <div className={NavbarStyle["nav__logo"]}>
            <img className={NavbarStyle["nav__logo--img"]}src={logo} alt="" />
        </div>
        <div className={NavbarStyle["nav__links"]}>
            <a href="#horoscope">HOROSCOPE</a>
            <a href="#daily">DAILY</a>
            <a href="#tarot">TAROT</a>
            <a href="#article">ARTICLE</a>
            <a href="#contact">CONTACT</a>
        </div>
    </div>
  )
}

export default Navbar