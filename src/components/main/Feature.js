const Feature = ({ img, text, i, heading }) => {
  return (
    <div className="feature__card" key={i}>
      <figure className="feature__img-box">
        <img src={img} alt="hot food 1" className="feature__img" />
      </figure>
      <div className="feature__card-heading">{heading}</div>
      <p className="feature__card-detail">{text}</p>
      {/* // eslint-disable-next-line  */}
      <a href="#" className="learn-more__4 feature__btn">
        learn more
      </a>
    </div>
  );
};

export default Feature;
