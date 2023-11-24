import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Middle() {
  return (
    <div className="body1">
      <div >
        <Row xs={1} md={2} lg={2} className="g-4">
          <Col className="title-query">
            <h1>Enjoy on your TV</h1>
            <p>
              Watch on smart TVs, PlayStation, Xbox,<br></br> Chromecast, Apple
              TV, Blu-ray players and more.
            </p>
          </Col>
          <Col>
            <div className="photo">
              <video className="video" autoPlay muted loop>
                <source
                  type="video/mp4"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                />
              </video>
              {/* <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'></img> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Middle;
