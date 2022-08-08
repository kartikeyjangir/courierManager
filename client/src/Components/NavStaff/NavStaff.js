import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import "./NavStaff.css";

function NavStaff() {
  const [status, setStatus] = useState(true);

  const innerultogglestatus = () => {
    if (status) {
      {
        document.getElementById("status").style.display = "block";
        setStatus(false);
      }
    } else {
      document.getElementById("status").style.display = "none";
      setStatus(true);
    }
  };
  return (
    <div>
      <h1 className="Navheading">STAFF PANEL</h1>
      <ul className="navlist">
        {/* <li>
          <i className="fas fa-qrcode" />
          Dashboard
        </li> */}
        <li>
          <NavLink to="/staff/addcourier">
            <i class="fas fa-plus-circle"></i>Add Courier
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/staff/updatestatus">
            <i class="fab fa-artstation"></i>All Courier
          </NavLink>
        </li>
        <li onClick={innerultogglestatus}>
          <i class="fas fa-circle-notch"></i>Status
        </li>
        <ul className="innerul " id="status" style={{ display: "none" }}>
          <li>
            <NavLink to="/staff/packed">Packed</NavLink>
          </li>
          <li>
            <NavLink to="/staff/shiped">Shiped</NavLink>
          </li>
          <li>
            <NavLink to="/staff/ofd">Out for Delivery</NavLink>
          </li>
          <li>
            <NavLink to="/staff/delivered">Delivered</NavLink>
          </li>
        </ul>
        <li>
          <NavLink to="/staff/search">
            <i class="fas fa-search"></i>Search Courier
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavStaff;
