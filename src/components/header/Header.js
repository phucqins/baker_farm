import Img from "../../assets/img/logo2-white.png";
import Navbar from "./Navbar";
import Sectioncontent from "./Sectioncontent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div style={{ padding: "15px 15px 0 15px" }}>
        <nav className="navbar">
          <img className="navbar_logo" src={Img} alt="logo" />
          <div style={{ flexGrow: 1 }}></div>
          <Navbar />
          <div
            className="bar-icon"
            onClick={() => {
              let x = document.querySelector(".nav-list");
              x.classList.toggle('active');
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <Sectioncontent />
        </nav>
      </div>
    </div>
  );
};

export default Header;
