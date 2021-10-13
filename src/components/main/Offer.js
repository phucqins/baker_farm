const Offer = ({ img }) => {
  return (
    <div
      className="offer-cont"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url("${img}")`,
      }}
    >
      <h1 class="heading-1 heading-1--font1 mb-hg">hot offer</h1>
      <p class="content-style content-style--upercase  content-style--light mb-lg container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        quibusdam error praesentium nobis facere, voluptates molestias quos
        facilis autem ipsa. voluptates molestias quos facilis autem
        ipsa.voluptates molestias quos facilis autem ipsa.
      </p>
      <a href="#" class="learn-more__3">
        learn more
      </a>
    </div>
  );
};

export default Offer;
