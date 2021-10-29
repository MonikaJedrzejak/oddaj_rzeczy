import React from "react";

export default function HomeNav() {
	return (
		<header className="home-nav">
			<nav className="home-nav-login">
				<ul className="home-menu">
					<li className="home-menu-item login-item">
						<a className="btn login-btn" href="#LogIn">Zaloguj</a>
					</li>
					<li className="home-menu-item login-item">
						<a className="btn login-btn"href="#SignIn">Załóż konto</a>
					</li>
				</ul>
			</nav>
			<nav className="home-nav-menu">
				<ul className="home-menu">
					<li className="home-menu-item menu-item">
						<a className="btn menu-btn" href="#Start">Start</a>
					</li>
					<li className="home-menu-item menu-item">
						<a className="btn menu-btn" href="#About">O co chodzi?</a>
					</li>
					<li className="home-menu-item menu-item">
						<a className="btn menu-btn" href="#AboutUs">O nas</a>
					</li>
					<li className="home-menu-item menu-item">
						<a className="btn menu-btn" href="#Organizations">Fundacja i organizacje</a>
					</li>
					<li className="home-menu-item menu-item">
						<a className="btn menu-btn" href="#Contact">Kontakt</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
