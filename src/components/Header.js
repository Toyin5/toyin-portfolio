import React from 'react';
import "./Header.css"
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import {FaLinkedin, FaLinkedinIn, FaTelegram} from "react-icons/fa"
import { DiCssdeck } from 'react-icons/di';

function Header() {
  return (
  <div className="header">
   	<div className="full-name">
		<DiCssdeck /> <span>Toyin Muhammed</span>
	</div>
	<div className="nav">
			<h4>Home</h4>
			<h4>About</h4>
			<h4>Projects</h4>
			<h4>Contact</h4>
	</div>
	<div className="social-links">
		<a href="https://github.com/Toyin5"><AiFillGithub fill="#303030" /></a>
		<a href="https://github.com/Toyin5"><AiOutlineWhatsApp fill="#303030" /></a>
		<a href="https://github.com/Toyin5"><AiFillTwitterCircle fill="#303030" /></a>
		<a href="https://github.com/Toyin5"><FaLinkedinIn fill="#303030" /></a>
		<a href="https://github.com/Toyin5"><FaTelegram fill="#303030" /></a>
	</div>
  </div>
  );
}

export default Header;
