import React from "react";
import { Link } from "react-router-dom";
import decorator from "../assets/Decoration.svg";
import tshirt from "../assets/Icon-1.svg";
import bag from "../assets/Icon-2.svg";
import search from "../assets/Icon-3.svg";
import circle from "../assets/Icon-4.svg";

export default function HomeFourSteps() {
	return (
		<div className="HomeFourSteps">
			<h2 className="fourSteps-title">Wystarczą 4 proste kroki</h2>
			<img src={decorator} alt="decoration" className="decoration" />
			<div className="fourSteps-bg">
				<div className="fourSteps-container container">
					<section className="fourSteps-content">
						<img src={tshirt} alt="t-shirt icon" className="icons" />
						<h6 className="content-title">Wybierz rzeczy</h6>
						<hr className="content-line"></hr>
						<p className="content-text">ubrania, zabawki, sprzęt i inne</p>
					</section>

					<section className="fourSteps-content">
						<img src={bag} alt="bag icon" className="icons" />
						<h6 className="content-title">Spakuj je</h6>
						<hr className="content-line"></hr>
						<p className="content-text">skorzystaj z worków na śmieci</p>
					</section>

					<section className="fourSteps-content">
						<img src={search} alt="search icon" className="icons" />
						<h6 className="content-title">Zdecyduj komu chcesz pomóc</h6>
						<hr className="content-line"></hr>
						<p className="content-text">wybierz zaufane miejsce</p>
					</section>

					<section className="fourSteps-content">
						<img src={circle} alt="circle icon" className="icons" />
						<h6 className="content-title">Zamów kuriera</h6>
						<hr className="content-line"></hr>
						<p className="content-text">
							kurier przyjedziew w dogodnym terminie
						</p>
					</section>
				</div>
			</div>
			<button className="btn btn-header">
				<Link to="/login">ODDAJ RZECZY</Link>
			</button>
		</div>
	);
}
