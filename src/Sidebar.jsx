import React from "react";
import appointmentIcon from './Icons/appointment-icon.svg'
import DashboardIcon from "./Icons/Dashboard-icon.svg";
import labTestIcon from "./Icons/lab-test-icon.svg";
import medicineCheckIcon from "./Icons/medicine-check-icon.svg";
import messageIcon from "./Icons/message-icon.svg";
import paymentIcon from "./Icons/payment-icon.svg";
import settingsIcon from "./Icons/setting-icon.svg";
import helpIcon from "./Icons/help-icon.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      {/* <!-- Sidebar --> */}
      {/* <!-- Sidebar - Brand --> */}
      <div className="sidebar-overall">
        <div className="sidebar-brand d-flex align-items-center justify-content-start text-decoration-none">
          <div className="sidebar-brand-text mx-3">Medico Sales</div>
        </div>
        <ul className="navbar-nav sidebar" id="accordionSidebar">
          {/* <!-- Divider --> */}
          {/* <!-- Nav Item ---> */}
          <li className="nav-item active">
            <Link to="/Dashboard">
              <img src={DashboardIcon} alt="icon" />
              <span className="navitem-text1">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/LabTest">
              <img src={labTestIcon} alt="icon" />
              <span className="navitem-text2">Lab Test</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/Appointment">
              <img src={appointmentIcon} alt="icon" />
              <span className="navitem-text2">Appointment</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/MedicineCheck">
              <img src={medicineCheckIcon} alt="icon" />
              <span className="navitem-text2">Medicine Order</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/Message">
              <img src={messageIcon} alt="icon" />
              <span className="navitem-text2">Message</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/Payment">
              <img src={paymentIcon} alt="icon" />
              <span className="navitem-text2">Payment</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/Settings">
              <img src={settingsIcon} alt="icon" />
              <span className="navitem-text2">Settings</span>
            </Link>
          </li>
          <li className="help-position">
            <img src={helpIcon} alt="icon" />
            <span>
              <h6>Help</h6>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Sidebar;