import Carousel from "react-bootstrap/Carousel";
import "./slide.css";
export const Slide = () => {
  return (
    <div>
      <div class="container-fluid">
        <div className="row title" style={{ marginBottom: "20px" }}>
          <div class="col-sm-12 btn btn-warning"></div>
        </div>
      </div>
      <div className="container-fluid">
        <Carousel>
          <Carousel.Item style={{ height: "1000px" }}>
            <img
              style={{ height: "1000px" }}
              className="d-block w-100"
              src={"https://www.virmansha.com/assets/img/bg/bg-1.jpg"}
              alt=""
            />
            <Carousel.Caption>
              <div className="slide-text-container">
                <h1 className="slide-text">Tales of Craft </h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "1000px" }}>
            <img
              style={{ height: "1000px" }}
              className="d-block w-100"
              src={"https://www.virmansha.com/assets/img/bg/bg-2.jpg"}
              alt=""
            />
            <Carousel.Caption>
              <div className="slide-text-container">
                <h1>Behold Vibrance</h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "1000px" }}>
            <img
              style={{ height: "1000px" }}
              className="d-block w-100"
              src={"https://www.virmansha.com/assets/img/bg/bg-4.jpg"}
              alt=""
            />
            <Carousel.Caption>
              <div className="slide-text-container">
                <h1>Sustainable and Sensible</h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ height: "1000px" }}>
            <img
              style={{ height: "1000px" }}
              className="d-block w-100"
              src={"https://www.virmansha.com/assets/img/bg/bg-8.jpg"}
              alt=""
            />
            <Carousel.Caption>
              <div className="slide-text-container">
                <h1>Celebrating Handicrafts</h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    {/* <a href="https://api.whatsapp.com/send?phone=918318238635&text=Hello there" class="float" target="_blank">
    <i class="fa fa-whatsapp my-float"></i></a>
    <a href="mailto:virmansha.sj@gmail.com" class="float-email">
    <i><img src="https://www.virmansha.com/assets/img/mail.png" alt="" /></i></a> */}
    </div>
  );
};
