import React from 'react';
import decorator from "../assets/Decoration.svg";
// import organizations from './organizations';

export default function HomeOrganizations() {
    return (
        <div className="HomeOrganizations">
            <div className="container">
                <h3 className="Org-Title">Komu pomagamy?</h3>
                <img src={decorator} alt="decoration" className="decoration" />
                <div className="Org-buttons">
                    <button className="btn btn-org btn-active">Fundacjom</button>
                    <button className="btn btn-org">Organizacjom pozarządowym</button>
                    <button className="btn btn-org">Lokalnym zbiórkom</button>
                </div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <div className="org-table">
                    <tr><td><span>title</span><p>desc</p></td><td><p>stuff</p></td></tr>
                    <tr><td><span>title</span><p>desc</p></td><td><p>stuff</p></td></tr>
                    <tr><td><span>title</span><p>desc</p></td><td><p>stuff</p></td></tr>
                </div>
            </div>
            
        </div>
    )
}
