import './Main.scss';
import dish3 from "../../assets/img/dish 1.jpeg";
import dish2 from "../../assets/img/dish 2.jpeg";
import dish1 from "../../assets/img/dish 3.jpeg";
import offer from "../../assets/img/offer-1.jpg";
import hot1 from "../../assets/img/hot food 1.jpeg";
import hot2 from "../../assets/img/hot food 2.jpeg";
import event1 from "../../assets/img/event 1.png";
import event2 from "../../assets/img/event 2.png";
import tea from "../../assets/img/tea.jpg";
import friend from "../../assets/img/friend1.jpg";
import Feature from "./Feature";
import Description from "./Description";
import Dishes from "./Dishes";
import Offer from "./Offer";
import VideoSection from "./VideoSection";
import Testimonial from "./Testimonial";
import Event from "./Event";
import Contact from "./Contact";

const Main = () => {
  const data = [
    {
      backGround: `linear-gradient(to top, rgba(231, 157, 60, 0.95) 0%, rgba(231, 157, 60, 0.95) 37.5%, transparent 37.5%),url("${dish1}")`,
      text: "TOP DESSERTS",
      color: "",
    },
    {
      backGround: `linear-gradient(to top, rgba(233, 48, 79, 0.95) 0%, rgba(233, 48, 79, 0.95) 37.5%, transparent 37.5%),url("${dish2}")`,
      text: "AWESOME ENTRE",
    },
    {
      backGround: `linear-gradient(to top, rgba(20, 218, 96, 0.95) 0%, rgba(20, 218, 96, 0.95) 37.5%, transparent 37.5%),url("${dish3}")`,
      text: "BEST APPETIZE",
    },
  ];
  const data1 = [
    {
      img: hot1,
      heading: "CAPRESE SALAD WITH PESTO SAUCE",
      text: "Aliquam dictum odio eget cursus tristique. Mauris ac gravida tellus. Nulla maximus lectus at purus faucibus egestas eget vel neque. Duis lectus enim, tincidunt ut velit sit amet, suscipit ultricies ligula. Nullam at lobortis arcu, sit amet pretium nisl. Nunc lacus nisl, consequat in pellentesque ac, volutpat id tellus.",
    },
    {
      img: hot2,
      heading: "OSSO BUCO ALLA MILANESE",
      text: "Aliquam dictum odio eget cursus tristique. Mauris ac gravida tellus. Nulla maximus lectus at purus faucibus egestas eget vel neque. Duis lectus enim, tincidunt ut velit sit amet, suscipit ultricies ligula.Maecenas pretium leo ut accumsan commodo. Vestibulum vulputate volutpat volutpat. Vivamus nec quam nec ligula finibus ullamcorper vel at justo.",
    },
  ];
  return (
    <div className="main-container">
      <div className="dishes-container">
        {data.map((c, i) => (
          <Dishes backGround={c.backGround} text={c.text} i={i} />
        ))}
      </div>
      <Description />
      <Offer img={offer} />
      <div className="feature-container">
        <div class="feature__heading mb-hg">
          <h2 class="heading-2 heading-2--dark mb-md">
            more than you can imagine
          </h2>
          <p class="content-style content-style--upercase mar-center">
            Duis viverra felis sapien, a venenatis lacus pulvinar condimentum.
          </p>
        </div>
        <div className="feature-cards">
          {data1.map((c, i) => (
            <Feature img={c.img} text={c.text} heading={c.heading} i={i} />
          ))}
        </div>
      </div>
      <VideoSection />
      <Testimonial img={friend} />
      <Event img1={event1} img2={event2} />
      <Contact img={tea} />
    </div>
  );
};

export default Main;
