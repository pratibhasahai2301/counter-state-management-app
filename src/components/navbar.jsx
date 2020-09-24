import React from 'react';

const Navbar = ({counterLength}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">Counter States <span className="badge badge-name badge-pill badge-secondary">{ counterLength }</span> </a>
    </nav>
  )
}

export default Navbar;