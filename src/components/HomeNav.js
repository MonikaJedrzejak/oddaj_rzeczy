import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function HomeNav({ duration }) {
	return (
		<header className="home-nav">
			<nav className="home-nav-login">
				<ul className="home-menu">
					<li className="home-menu-item login-item">
						<Link to="/login" className="btn login-btn">Zaloguj</Link>
					</li>
					<li className="home-menu-item login-item">
						<Link to="/register" className="btn login-btn">Załóż konto</Link>
					</li>
				</ul>
			</nav>

			<nav className="home-nav-menu">
				<ul className="home-menu">
					<li className="home-menu-item menu-item">
						{/* <a className="btn menu-btn" href="#Start">Start</a> */}
						<ScrollLink to="/" smooth={true} duration={duration} className="btn menu-btn">
							Start
						</ScrollLink>
					</li>
					<li className="home-menu-item menu-item">
						<ScrollLink to="/" smooth={true} duration={duration} className="btn menu-btn">
							O co chodzi?
						</ScrollLink>
					</li>
					<li className="home-menu-item menu-item">
						<ScrollLink to="/" smooth={true} duration={duration} className="btn menu-btn">
						O nas
						</ScrollLink>
					</li>
					<li className="home-menu-item menu-item">
						<ScrollLink to="/" smooth={true} duration={duration} className="btn menu-btn">
						Fundacja i organizacje
						</ScrollLink>
					</li>
					<li className="home-menu-item menu-item">
						<ScrollLink to="/" smooth={true} duration={duration} className="btn menu-btn">
						Kontakt
						</ScrollLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
