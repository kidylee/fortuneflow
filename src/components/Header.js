import React from 'react'

const Header = () => (
  <header className="main-header">
    <div className="logo">
      <span className="logo-mini"><b>F</b>F</span>
      <span className="logo-lg"><b>Fortune</b>Flow</span>
    </div>
    <nav className="navbar navbar-static-top" role="navigation">
      <div href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
      </div>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li>
            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
 
)

export default Header