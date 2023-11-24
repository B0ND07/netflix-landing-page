import React from "react";

function Footer() {
  return (
    <div className="footer">
      {/* <hr style={{marginTop:"35px",}}></hr> */}
      <div className="footer-items">
        <div className="about">
          <h2>About Us</h2>
          <ul>
            <li>Our Company</li>
            <li>Culture and Values</li>
            <li>Contact Us</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div className="about">
          <h2>Careers</h2>
          <li>Culture and Values</li>
          <li>Operation </li>
          <li>Company</li>
          <li>Placeemnts</li>
        </div>
        <div className="about">
          <h2>Business</h2>
          <li>Suppliers</li>
          <li>Coperate</li>
          <li>Our Company</li>
          <li>Our Company</li>
        </div>
        <div className="about">
          <h2>Order</h2>

          <li>Order Now</li>
          <li>Delivery</li>
          <li>Options</li>
          <li>Our Company</li>
        </div>
      </div>
      <hr style={{ marginBottom: "35px" }}></hr>
      <div className="para2" style={{ display: "flex"}}>
        <p>Privacy Notice</p>
        <p>Terms of use</p>
        <p>CA Supply Chain</p>
        <p>Cookie Preference</p>
      </div>
      <p
        style={{
          // marginLeft: "100px",
          color: "white",
          paddingBottom: "20px",
          textAlign: "center",
        }}
      >
        © 2023 Netflix Company. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
