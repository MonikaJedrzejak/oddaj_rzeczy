import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ duration }) {
	return (
		<header className="home-nav">
			<nav className="home-nav-login">
				<ul className="home-menu">
					<li className="home-menu-item login-item">
						<Link to="/login" className="btn login-btn">
							Zaloguj
						</Link>
					</li>
					<li className="home-menu-item login-item">
						<Link to="/register" className="btn login-btn">
							Załóż konto
						</Link>
					</li>
				</ul>
			</nav>

			<nav className="home-nav-menu">
				<ul className="home-menu">
					<li className="home-menu-item menu-item">
						{/* <a className="btn menu-btn" href="#Start">Start</a> */}
						<Link to="/" className="btn menu-btn">
							Start
						</Link>
					</li>
					<li className="home-menu-item menu-item">
						<Link to="/" className="btn menu-btn">
							O co chodzi?
						</Link>
					</li>
					<li className="home-menu-item menu-item">
						<Link to="/" className="btn menu-btn">
							O nas
						</Link>
					</li>
					<li className="home-menu-item menu-item">
						<Link to="/" className="btn menu-btn">
							Fundacja i organizacje
						</Link>
					</li>
					<li className="home-menu-item menu-item">
						<Link to="/" className="btn menu-btn">
							Kontakt
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
