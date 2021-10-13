import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ img }) => {
  return (
    <section className="contact-section">
      <div className="container contact__box">
        <div className="contact__info">
          <div className="heading-2 heading-2--dark mb-lg  ">contacts</div>
          <ul className="contact__detail mb-lg heading-2--font3">
            <li className="contact__item">
              <a href="#" className="contact__item-link">
                24 fifth Avenue 1020, Mahattan
              </a>
            </li>
            <li className="contact__item">
              <a href="#" className="contact__item-link">
                0818-890-057
              </a>
            </li>
          </ul>
          <div className="contact__email heading-2--font3">
            <FontAwesomeIcon
              className="fas fa-envelope contact__email-icon"
              icon={faEnvelope}
            />
            <span>greenlogitics@gmail.com</span>
          </div>
        </div>
        <div className="contact__copy">
          <img src={img} alt="tea" className="contact__img " />
          <p className="contact__copyrights heading-2--font3">
            © 2021 | privacy policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
