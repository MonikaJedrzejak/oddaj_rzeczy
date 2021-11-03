import React from 'react';
import decorator from "../assets/Decoration.svg";

export default function HomeOrganizations() {
    return (
        <div className="HomeOrganizations">
            <div className="container">
                <h3 className="Org-Title">Komu pomagamy?</h3>
                <img src={decorator} alt="decoration" className="decoration" />
                <div className="Org-buttons">
                    <button className="btn btn-org">Fundacjom</button>
                    <button className="btn btn-org">Organizacjom pozarządowym</button>
                    <button className="btn btn-org">Lokalnym zbiórkom</button>
                </div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <div className="org-table">
                    
                </div>
            </div>
            
        </div>
    )
}
