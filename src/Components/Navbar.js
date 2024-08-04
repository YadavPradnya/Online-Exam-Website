import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="#" style={{ color: 'white', marginLeft: '2rem' }}>Exam
      </a>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link"  href="#"  onClick={onCartClick} style={{ color:'white' }}>
           
              <i className="ri-shopping-cart-2-line" style={{ fontSize: '25px', marginLeft:'150vh'}}></i>
              {cartCount > 0 && (
                <span 
                 
                >
                  {cartCount}
                </span>
              )}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
