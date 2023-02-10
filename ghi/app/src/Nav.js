import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './index.css';

function Nav() {
  const [inventoryMenuVisible, setInventoryMenuVisible] = useState(false);
  const [serviceMenuVisible, setServiceMenuVisible] = useState(false);
  const [salesMenuVisible, setSalesMenuVisible] = useState(false);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid" id="navbar-container">
        <NavLink className="navbar-brand" id="navbar-brand" to="/">
          AutoMate
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* ---------- INVENTORY ---------- */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarScrollingDropdown" onClick={() => setInventoryMenuVisible(!inventoryMenuVisible)} >
                Inventory
              </a>
              <ul style={{display: inventoryMenuVisible ? 'block' : 'none'}}>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/automobiles"
                    onClick={() => setInventoryMenuVisible(!inventoryMenuVisible)}
                  >
                    Automobiles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/manufacturers"
                    onClick={() => setInventoryMenuVisible(!inventoryMenuVisible)}
                  >
                    Manufacturers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/models"
                    onClick={() => setInventoryMenuVisible(!inventoryMenuVisible)}
                  >
                    Vehicle Models
                  </Link>
                </li>
              </ul>
            </li>
            {/* ---------- SERVICE ---------- */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarScrollingDropdown" onClick={() => setServiceMenuVisible(!serviceMenuVisible)} >
                Service
              </a>
              <ul style={{display: serviceMenuVisible ? 'block' : 'none'}}>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/technicians/new"
                    onClick={() => setServiceMenuVisible(!serviceMenuVisible)}
                  >
                    Add Technician
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="appointments/new"
                    onClick={() => setServiceMenuVisible(!serviceMenuVisible)}
                  >
                    New Appointment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/appointments"
                    onClick={() => setServiceMenuVisible(!serviceMenuVisible)}
                  >
                    All Appointments
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/service/vin"
                    onClick={() => setServiceMenuVisible(!serviceMenuVisible)}
                  >
                    Service History
                  </Link>
                </li>
              </ul>
            </li>
            {/* ---------- SALES ---------- */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarScrollingDropdown" onClick={() => setSalesMenuVisible(!salesMenuVisible)} >
                Sales
              </a>
              <ul style={{display: salesMenuVisible ? 'block' : 'none'}}>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/salespeople/new"
                    onClick={() => setSalesMenuVisible(!salesMenuVisible)}
                  >
                    Add Sales Person
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/customers/new"
                    onClick={() => setSalesMenuVisible(!salesMenuVisible)}
                  >
                    Add Customer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/sales/new"
                    onClick={() => setSalesMenuVisible(!salesMenuVisible)}
                  >
                    New Sale Record
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/sales"
                    onClick={() => setSalesMenuVisible(!salesMenuVisible)}
                  >
                    All Sales
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/salespeople"
                    onClick={() => setSalesMenuVisible(!salesMenuVisible)}
                  >
                    Sales Person History
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Nav;
