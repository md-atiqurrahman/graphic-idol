import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./WhatsApp.css";
import { Link } from "react-router-dom";

const WhatsApp = () => {
  return (
    <div className="whatsapp-container fixed right-0 bottom-0 cursor-pointer">
      <Link target="_blank" to="https://api.whatsapp.com/send?phone=17868915152">
        <FontAwesomeIcon
          className="w-[60px] h-[60px] text-green-500"
          icon={faSquareWhatsapp}
        />
      </Link>
      <div className="whatsapp-text text-center w-[120px] text-white  absolute bottom-[20px] right-full  bg-green-500 rounded-l-lg shadow-lg">
        <h4>WhatsApp Us</h4>
      </div>
    </div>
  );
};

export default WhatsApp;
