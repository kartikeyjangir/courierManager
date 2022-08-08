import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavAdmin.css";
import imgpath from '../../Img/sidebar-2.jpg'

function NavAdmin() {
  const [clothing, setClothing] = useState(true);
  const [staff, setStaff] = useState(true);

  const innerultogglestaff = () => {
    if (staff) {
      {
        document.getElementById("Staff").style.display = "block";
        setStaff(false);
        document.getElementById("Clothing").style.display = "none";
        setClothing(true);
      }
    } else {
      document.getElementById("Staff").style.display = "none";
      setStaff(true);
    }
  };
  const innerultoggleclothing = () => {
    if (clothing) {
     { document.getElementById("Clothing").style.display = "block";
      setClothing(false);
      document.getElementById("Staff").style.display = "none";
      setStaff(true);}
    } else {
      document.getElementById("Clothing").style.display = "none";
      setClothing(true);
    }
  };

  return (
    <div className="nav" style={{background:"url({imgpath})"}}>
      <header className="Navheading">   ADMIN PANEL  </header>
      <ul className="navlist">
        <li><i className='fas fa-qrcode'/>Dashboard</li>
        <li onClick={innerultoggleclothing}><i class="fas fa-archway"></i>Branches</li>
        <ul className="innerul " id="Clothing" style={{ display: "none" }}>
          <li>
            <NavLink to="/admin/addbranch">Add Branch</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/admin/managebranch">Manage Branches</NavLink>{" "}
          </li>
        </ul>

        <li onClick={innerultogglestaff}><i class="fab fa-accessible-icon"></i>Staff</li>
        <ul className="innerul " id="Staff" style={{ display: "none" }}>
          <li>
            <NavLink to="/admin/addstaff">Add Staff</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/admin/managestaff">Manage Staff</NavLink>{" "}
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default NavAdmin;
