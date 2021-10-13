import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Dishes = ({ backGround, text, i }) => {
  
  return (
    <div
      className={"dish" + i + " dish-shared"}
      style={{ backgroundImage: `${backGround}` }}
    >
      <h2>{text}</h2>
      <a href="#" className="btn-dish">
        <FontAwesomeIcon icon={faChevronRight} />
      </a>
    </div>
  );
};

export default Dishes;
