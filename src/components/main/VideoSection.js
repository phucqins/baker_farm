import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const VideoSection = () => {
  return (
    <section class="video-section">
      <div class="video__box container">
        <h1 class="heading-1 heading-1--font1 mb-lg">video</h1>
        <h2 class="heading-2 heading-2--font2 heading-2--light no-transform">
          Presentation
        </h2>
        <a href="#" class="video__btn">
        <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
    </section>
  );
};

export default VideoSection;
