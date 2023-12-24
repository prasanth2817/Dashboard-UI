import React from "react";
import notificationIcon from "./Icons/notification-icon.svg";

function Dashboard(){
    return<>
<div className="dashboard-overall">
  <nav className="navbar ">
  <div className="navbar-spacing">
    <form className="d-flex form-width" role="search">
      <input className="form-control form-icon  me-2" type="search" placeholder="     Search" aria-label="Search" />
    </form>
    <img src={notificationIcon} alt="icon" />
  </div>
  </nav>
<div className="sales-page">
  <span className="sales-text">Sales Information</span>
</div>
<div className="d-flex customer-info-page">
  <div className="customer-input">
    <label>Customer</label>
    <input type="text" placeholder="Enter Customer Name"/>
  </div>
  <div className="customer-input">
  <label>Invoice ID</label>
    <input type="text" placeholder="Enter Invoice ID"/>
  </div>
  <div className="customer-input">
  <label>Start Date</label>
    <input type="text" placeholder="Start Date"/>
  </div>
  <div className="customer-input">
  <label>End Date</label>
    <input type="text" placeholder="End Date"/>
  </div>
</div>
<div>
  <table className="table-data">
    <thead>
    <tr>
      <th>Invoice ID</th>
      <th>Date</th>
      <th>Customer</th>
      <th>Payable Amount </th>
      <th>Paid Amount </th>
      <th>Due</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    <tr>
      <td>#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
    </tbody>
  </table>
</div>
</div>
</>

}
export default Dashboard