import React, { useEffect, useState } from 'react';
import "./Header.css"
import { AiFillGithub, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaEllipsisV, FaLinkedinIn, FaTelegram} from "react-icons/fa"
import { DiCssdeck } from 'react-icons/di';

function Header() {
	const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const toggleNav = () => {
        setToggleMenu(!toggleMenu) 
      }
    useEffect(() => {
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])

  return (
  <div className="header">
   	<div className="full-name">
		<DiCssdeck /> <span>Toyin Muhammed</span>
	</div>
		{(toggleMenu || screenWidth > 500) && (
	<>
	<div className='all-nav'>
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
			<button className="nav-toggle btn" aria-label="toggle navigation" onClick={toggleNav}>
				<FaEllipsisV />
			</button>
	</>
			)}
  </div>
  );
}

export default Header;
