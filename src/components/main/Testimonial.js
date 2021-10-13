const Testimonial = ({img}) => {
  return (
    <section class="testimonial-section ">
      <div class="testimonial__box container">
        <h2 class="heading-2 heading-2--light mb-shg">Testimonial</h2>
        <div class="testimonial__each">
          <img
            src={img}
            alt="friend 1"
            class="testimonial__person mb-lg"
          />
          <blockquote class="content-style content-style--light mb-lg testimonial__quote">
            Fusce volutpat eros mi, et rutrum erat faucibus nec. Mauris
            ullamcorper lacinia orci. Praesent leo nisl, consequat at rhoncus
            in, sodales ut nisl. Morbi imperdiet vel est non hendrerit.
          </blockquote>
          <a href="#" class="learn-more__2 color-light">
            more testimonials
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
