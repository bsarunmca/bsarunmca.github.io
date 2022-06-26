import React from "react";
import HeaderOne from "../header/headerOne";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faIconlist from "../../constant/fontAwesomeList";
const Iconlist = () => {
  return (
    <div>
      <ul>
        {faIconlist.map((value, index) => {
          return (
            <li key={index}>
              <FontAwesomeIcon icon={`${value}`} className="fa-2x" />{" "}
              <span>:{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Iconlist;
