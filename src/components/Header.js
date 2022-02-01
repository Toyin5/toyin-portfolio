import React from 'react';
import "./Header.css"

function Header() {
  return (
  <div className="header">
   	<div className="full-name">
		<span>Toyin Muhammed</span>
	</div>
	<div className="nav">
			<h4>Home</h4>
			<h4>About</h4>
			<h4>Projects</h4>
			<h4>Contact</h4>
	</div>
	<div className="social-links">
		<a href="https://github.com/Toyin5">{/*Github Icon*/}</a>
	</div>
  </div>
  );
}

export default Header;
