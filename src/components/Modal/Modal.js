import "./Modal.scss";
import React, { useEffect } from "react";

const Modal = () => {
  const handleClick = () => {
    document.querySelector(".mymodal").setAttribute("style", "display:none");
  };
  return (
    <div className="mymodal">
      <div className="modal__box container">
        <h1 className="heading-1 no-transform heading-1--dark mb-hg">
          Read before you enter our page!
        </h1>
        <h2 className="heading-2 heading-2--dark mb-hg no-transform">
          Please <b>update</b> your browser to the latest version for the best
          exprerience in our page. Thank you!
        </h2>
        <div className="modal__btn">
          <a href="#" className="modal__btn-style" onClick={handleClick}>
            I have updated
          </a>
          <a
            href="https://browser-update.org/update.html"
            target="blank"
            className="learn-more__4"
          >
            how to update
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
