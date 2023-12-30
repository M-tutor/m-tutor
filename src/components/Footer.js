import React from "react";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer flex flex-wrap justify-around items-center pt-6 pb-6 px-10 lg:px-16 fixed bottom-0 w-full">
        <div className="text-white font-medium text-sm w-full md:w-3/5 lg:h-80 ">
          <h3 className="font-bold text-2xl pb-5 pt-6">Contact US</h3>

          <div className=" flex flex-row">
            <ul className="list-none p-0 my-0 mx-2">
              <li className="my-5 mx-0">
                <i className="fas fa-envelope"></i>
              </li>
              <li className="my-5 mx-0">
                <i className="fas fa-phone"></i>
              </li>
              <li className="my-5 mx-0">
                <i className="fas fa-map-marker"></i>
              </li>
            </ul>
            <ul className="list-none p-0 my-0 mx-2">
              <li className="my-5 mx-0">hello@mtutor.com</li>
              <li className="my-5 mx-0">+94 71 234 567</li>
              <li className="my-5 mx-0">University of Moratuwa, Katubedda</li>
            </ul>
          </div>
        </div>

        <div className=" w-full md:w-2/5 h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7874587635993!2d79.8996789105983!3d6.795695119911966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2454186608f23%3A0x1e4a36ca98dbbb88!2sUniversity%20of%20Moratuwa%2C%20Moratuwa%2010400!5e0!3m2!1sen!2slk!4v1703744999372!5m2!1sen!2slk"
            title="UOM"
            referrerpolicy="no-referrer"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </footer>
    );
  }
}

export default Footer;
