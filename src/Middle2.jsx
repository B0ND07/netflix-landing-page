import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Middle2() {
  return (
    <div className="body1">
      <div>
        <Row xs={1} md={2} lg={2} className="g-4">
          <Col>
            <div className="photo">
              <video autoPlay muted loop>
                <source
                  type="video/mp4"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                />
              </video>
              {/* <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'></img> */}
            </div>
          </Col>
          <Col className="title-query">
            <h1>
              Download your shows
              <br /> to watch offline
            </h1>
            <p>
              Save your favourites easily and always have<br></br> something to
              watch.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Middle2;
