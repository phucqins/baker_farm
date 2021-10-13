const Event = ({img1, img2}) => {
  return (
    <section class="event-section container mb-shg">
      <h2 class="heading-2 heading-2--dark event__title mb-md">
        news &amp; events
      </h2>
      <div class="event__card">
        <img src={img1} alt="event 1" class="event__card-dish" />
        <div class="event__date">
          <p class="event__date-day">26</p>
          <p class="event__date-month">march</p>
        </div>
        <div class="event__heading">opening big class for the Italian food</div>
        <p class="event__detail">
          Aliquam dictum odio eget cursus tristique. Mauris ac gravida tellus.
          Nulla maximus lectus at purus faucibus egestas eget vel neque. Duis
          lectus enim, tincidunt ut velit sit amet, suscipit ultricies ligula..
        </p>

        <a href="#" class="event__btn">
          read more
        </a>
      </div>
      <div class="event__card">
        <img src={img2} alt="event 2" class="event__card-dish" />
        <div class="event__date">
          <p class="event__date-day">28</p>
          <p class="event__date-month">march</p>
        </div>
        <div class="event__heading">
          the way to cood your resoto perfectly ever!
        </div>
        <p class="event__detail">
          Mauris ac gravida tellus. Nulla maximus lectus at purus faucibus
          egestas eget vel neque. Ut velit sit amet, suscipit ultricies ligula.
          Nullam at lobortis arcu, sit amet pretium nisl.
        </p>
        <a href="#" class="event__btn">
          read more
        </a>
      </div>
    </section>
  );
};

export default Event;
