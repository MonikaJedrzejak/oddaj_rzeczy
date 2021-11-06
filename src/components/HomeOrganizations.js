import React, { useState } from "react";
import decorator from "../assets/Decoration.svg";
import Foundations from "./Foundations";

const foundation = [
	{
		name: 'Fundacja "Dbam o Zdrowie"',
		description:
			"Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
		stuff: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
	},
	{
		name: 'Fundacja "Dla dzieci"',
		description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
		stuff: "ubrania, meble, zabawki",
	},
	{
		name: 'Fundacja "Bez domu"',
		description:
			"Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
		stuff: "ubrania, jedzenie, ciepłe koce",
	},
	{
		name: 'Fundacja "Dzieci są ważne"',
		description:
			"Cel i misja: Pomoc dzieciom znajdującym się w trudnej sytuacji życiowej.",
		stuff: "buty, ubrania, jedzenie, sprzęt AGD, zabawki",
	},
	{
		name: 'Fundacja "Zwierzakom"',
		description: "Cel i misja: Pomoc zwierzakom z ubogich rodzin.",
		stuff: "jedzenie, koce, stare ubrania",
	},
	{
		name: 'Fundacja "Pomoc seniorom"',
		description: "Cel i misja: Pomoc dla osób starszych.",
		stuff: "znowu ubrania, jedzenie, ciepłe koce, książki",
	},
	{
		name: 'Fundacja "Dbam o Ciebie"',
		description:
			"Cel i misja: Pomoc osobom ubogim.",
		stuff: "znowu ubrania, jedzenie, sprzęt AGD, meble, zabawki",
	},
	{
		name: 'Fundacja "Polsat"',
		description: "Cel i misja: pomoc chorym i niepełnosprawnym dzieciom.",
		stuff: "ubrania, zabawki",
	},
	{
		name: 'Fundacja "Lorem ipsum"',
		description:
			"Cel i misja: pomoc dla osób nie posiadających miejsca zamieszkania.",
		stuff: "lorem, ipsum, lorem",
	},
];

const organizations = [
    {
        name: 'Organizacja "Lorem Ipsum 1"',
        description: "1 Quis varius quam quisque id diam vel quam elementum pulvinar.",
        stuff: "1 Egestas, sed, tempus"
    },
    {
        name: 'Organizacja "Lorem Ipsum 2"',
        description: "2 Quis varius quam quisque id diam vel quam elementum pulvinar.",
        stuff: "2 Egestas, sed, tempus"
    },
    {
        name: 'Organizacja "Lorem Ipsum 3"',
        description: "3 Quis varius quam quisque id diam vel quam elementum pulvinar.",
        stuff: "3 Egestas, sed, tempus"
    },
    {
        name: 'Organizacja "Lorem Ipsum 4"',
        description: "4 Quis varius quam quisque id diam vel quam elementum pulvinar.",
        stuff: "4 Egestas, sed, tempus"
    },
    {
        name: 'Organizacja "Lorem Ipsum 5"',
        description: "5 Quis varius quam quisque id diam vel quam elementum pulvinar.",
        stuff: "5 Egestas, sed, tempus"
    },
    {
        name: 'Organizacja "Lorem Ipsum 6"',
        description: "6 Quis varius quam quisque id diam vel quam elementum pulvinar.",
        stuff: "6 Egestas, sed, tempus"
    }
]

const local = [
    {
        name: 'Zbiórka "Lorem Ipsum 1"',
        description: "1 Quis varius quam quisque id diam vel quam elementum pulvinar.",
        stuff: "1 Egestas, sed, tempus"
    },
    {
        name: 'Zbiórka "Lorem Ipsum 2"',
        description: "2 Quis varius quam quisque id diam vel quam elementum pulvinar.",
        stuff: "2 Egestas, sed, tempus"
    },
    {
        name: 'Zbiórka "Lorem Ipsum 3"',
        description: "3 Quis varius quam quisque id diam vel quam elementum pulvinar.",
        stuff: "3 Egestas, sed, tempus"
    }
]

export default function HomeOrganizations() {
	const [table, setTable] = useState(foundation);
	console.log(table);
	const handleClickFoundation = () => {
		setTable(foundation);
	}
	const handleClickOrganizations = () => {
		setTable(organizations);
	}
	const handleClickLocal = () => {
		setTable(local);
	}
	return (
		<div className="HomeOrganizations">
			<div className="container">
				<h3 className="Org-Title">Komu pomagamy?</h3>
				<img src={decorator} alt="decoration" className="decoration" />
				<div className="Org-buttons">
					<button className="btn btn-org" onClick={handleClickFoundation}>Fundacjom</button>
					<button className="btn btn-org" onClick={handleClickOrganizations} >Organizacjom pozarządowym</button>
					<button className="btn btn-org" onClick={handleClickLocal}>Lokalnym zbiórkom</button>
				</div>
			<Foundations table={table}/>
			</div>
		</div>
	);
}
