import React from 'react'

const MainSidebar = () => (
  <aside className="main-sidebar">
    <section className="sidebar">
      <div className="user-panel">
        <div className="pull-left image">
          <img src={require('admin-lte/dist/img/user2-160x160.jpg')} className="img-circle" alt="User Image"/>
        </div>
        <div className="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <ul className="sidebar-menu">
        <li className="header">HEADER</li>
        <li className="active"><a href="#"><i className="fa fa-link"></i> <span>Link</span></a></li>
        <li><a href="#"><i className="fa fa-link"></i> <span>Another Link</span></a></li>
        <li className="treeview">
          <a href="#"><i className="fa fa-link"></i> <span>Multilevel</span> <i className="fa fa-angle-left pull-right"></i></a>
          <ul className="treeview-menu">
            <li><a href="#">Link in level 2</a></li>
            <li><a href="#">Link in level 2</a></li>
          </ul>
        </li>
      </ul>
    </section>
  </aside>
)

export default MainSidebar